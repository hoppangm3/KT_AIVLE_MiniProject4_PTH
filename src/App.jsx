import React, { useState, useEffect } from 'react'
import { Box, Container, Alert, Snackbar, Typography } from '@mui/material'
import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom'
import Header from './components/Header'
import Home from './screens/Home'
import HowToUse from './screens/HowToUse'
import LoginSignup from './screens/LoginSignup'
import BookListScreen from './screens/BookListScreen'
import BookFormScreen from './screens/BookFormScreen'
import BookDetailScreen from './screens/BookDetailScreen'
import { apiService } from './services/apiService'
import dbData from '../db.json'

// Fallback mock initial books for LocalStorage Mode
const initialLocalStorageBooks = dbData.books

/**
 * Wrappers to extract URL parameters and pass to screens
 */
function EditBookWrapper({ books, ...props }) {
  const { id } = useParams()
  const book = books.find(b => b.id === id)
  return <BookFormScreen book={book} selectedBookId={id} {...props} />
}

function BookDetailScreenWrapper(props) {
  const { id } = useParams()
  return <BookDetailScreen bookId={id} {...props} />
}

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Storage States
  const [books, setBooks] = useState([])
  const [isOfflineMode, setIsOfflineMode] = useState(false)
  
  // Auth and API Key States
  const [currentUser, setCurrentUser] = useState(null)
  const [userApiKey, setUserApiKey] = useState('')
  
  // Feedback alerts
  const [toast, setToast] = useState({ open: false, message: '', severity: 'info' })

  // Initialize and Fetch Books
  useEffect(() => {
    // 1. Check for persisted user session
    const storedUser = localStorage.getItem('current_user')
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser))
    }

    loadBooks()
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Core loading function
  const loadBooks = async () => {
    try {
      const data = await apiService.getAllBooks()
      setBooks(data)
      setIsOfflineMode(false)
    } catch (err) {
      console.warn('json-server가 응답하지 않습니다. 로컬 스토리지 모드로 자동 전환합니다.', err)
      setIsOfflineMode(true)
      
      // Load from LocalStorage
      const localBooks = localStorage.getItem('mock_books')
      if (localBooks && JSON.parse(localBooks).length === initialLocalStorageBooks.length) {
        // 책 목록 복원 후, 별도 저장된 이미지도 합쳐서 복원
        const parsedBooks = JSON.parse(localBooks)
        const savedImages = JSON.parse(localStorage.getItem('book_images') || '{}')
        const mergedBooks = parsedBooks.map(b =>
          savedImages[b.id] ? { ...b, coverImageUrl: savedImages[b.id] } : b
        )
        setBooks(mergedBooks)
      } else {
        localStorage.setItem('mock_books', JSON.stringify(initialLocalStorageBooks))
        setBooks(initialLocalStorageBooks)
      }
    }
  }

  // Handle routing / navigation
  const handleNavigate = (screen, bookId = null) => {
    switch (screen) {
      case 'home': navigate('/'); break
      case 'about': navigate('/about'); break
      case 'list': navigate('/list'); break
      case 'write': navigate(bookId ? `/edit/${bookId}` : '/write'); break
      case 'detail': navigate(`/detail/${bookId}`); break
      case 'login-signup': navigate('/login'); break
      default: navigate('/');
    }
  }

  // Handle Mock Login / Signup
  const handleLoginSuccess = (user) => {
    setCurrentUser(user)
    localStorage.setItem('current_user', JSON.stringify(user))
    setToast({ open: true, message: `${user.username} 작가님, 서재에 오신 것을 환영합니다!`, severity: 'success' })
    navigate('/')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('current_user')
    setToast({ open: true, message: '성공적으로 로그아웃되었습니다.', severity: 'info' })
    navigate('/')
  }

  const handleSaveApiKey = (key) => {
    setUserApiKey(key)
  }

  // Safe Image Storage Helper (for QuotaExceededError)
  const safeSaveImage = (id, imageUrl) => {
    if (!imageUrl) return
    const savedImages = JSON.parse(localStorage.getItem('book_images') || '{}')
    savedImages[id] = imageUrl
    
    try {
      localStorage.setItem('book_images', JSON.stringify(savedImages))
    } catch (e) {
      if (e.name === 'QuotaExceededError') {
        const keys = Object.keys(savedImages)
        while (keys.length > 0) {
          const keyToRemove = keys.shift()
          if (keyToRemove !== id) {
            delete savedImages[keyToRemove]
            try {
              localStorage.setItem('book_images', JSON.stringify(savedImages))
              setToast({ open: true, message: '저장 공간 부족으로 이전 표지 이미지가 일부 삭제되었습니다.', severity: 'warning' })
              return // Successfully saved after removing
            } catch (err) {
              // Still fails, loop continues
            }
          }
        }
      }
    }
  }

  // CRUD actions helper
  const handleSaveBook = async (payload, customId = null) => {
    const isEdit = !!customId
    
    if (isOfflineMode) {
      const targetId = isEdit ? customId : (payload.id || Date.now().toString())

      // coverImageUrl은 용량이 크므로 별도 key(book_images)에 저장 (Quota 대응 적용)
      if (payload.coverImageUrl) {
        safeSaveImage(targetId, payload.coverImageUrl)
      }

      // LocalStorage Mode Save: Immutability spread pattern
      let updatedBooks
      if (isEdit) {
        updatedBooks = books.map(b => b.id === targetId ? { ...b, ...payload } : b)
        setToast({ open: true, message: '작품 정보가 수정되었습니다. (로컬 저장)', severity: 'success' })
      } else {
        const newBook = { id: targetId, ...payload }
        updatedBooks = [...books, newBook]
        setToast({ open: true, message: '새로운 작품이 등록되었습니다. (로컬 저장)', severity: 'success' })
      }

      // mock_books에는 이미지 제외 저장 (용량 절약)
      const booksWithoutImages = updatedBooks.map(b => ({ ...b, coverImageUrl: b.coverImageUrl?.startsWith('data:') ? '' : b.coverImageUrl }))
      localStorage.setItem('mock_books', JSON.stringify(booksWithoutImages))
      setBooks(updatedBooks)
      handleNavigate(isEdit ? 'detail' : 'list', targetId)
    } else {
      // REST API Mode Save
      try {
        let savedBook
        if (isEdit) {
          savedBook = await apiService.updateBook(customId, payload)
        } else {
          savedBook = await apiService.createBook(payload)
        }

        setToast({ 
          open: true, 
          message: isEdit ? '작품이 성공적으로 수정되었습니다.' : '새로운 작품이 등록되었습니다.', 
          severity: 'success' 
        })
        await loadBooks()
        handleNavigate(isEdit ? 'detail' : 'list', isEdit ? customId : savedBook.id)
      } catch (err) {
        console.error('서버 저장 중 오류 발생:', err)
        setToast({ open: true, message: `서버 저장 중 오류가 발생했습니다. (${err.message})`, severity: 'error' })
      }
    }
  }

  const handleDeleteBook = async (id) => {
    if (isOfflineMode) {
      // LocalStorage Mode Delete
      const updatedBooks = books.filter(b => b.id !== id)
      localStorage.setItem('mock_books', JSON.stringify(updatedBooks))
      setBooks(updatedBooks)
      setToast({ open: true, message: '작품이 삭제되었습니다. (로컬 저장)', severity: 'info' })
      handleNavigate('list')
    } else {
      // REST API Mode Delete
      try {
        await apiService.deleteBook(id)
        setToast({ open: true, message: '작품이 성공적으로 삭제되었습니다.', severity: 'info' })
        await loadBooks()
        handleNavigate('list')
      } catch (err) {
        setToast({ open: true, message: `서버 삭제 중 오류가 발생했습니다. (${err.message})`, severity: 'error' })
      }
    }
  }

  const handleUpdateBook = async (id, updatedFields) => {
    if (isOfflineMode) {
      // coverImageUrl은 용량이 크므로 별도 key(book_images)에 저장 (Quota 대응 적용)
      if (updatedFields.coverImageUrl) {
        safeSaveImage(id, updatedFields.coverImageUrl)
      }
      const updatedBooks = books.map(b => b.id === id ? { ...b, ...updatedFields } : b)
      // mock_books에는 이미지 제외 저장 (용량 절약)
      const booksWithoutImages = updatedBooks.map(b => ({ ...b, coverImageUrl: b.coverImageUrl?.startsWith('data:') ? '' : b.coverImageUrl }))
      localStorage.setItem('mock_books', JSON.stringify(booksWithoutImages))
      setBooks(updatedBooks)
    } else {
      await loadBooks()
    }
  }

  // Toast Close helper
  const handleCloseToast = () => setToast(prev => ({ ...prev, open: false }))

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', pb: 8 }}>
      {/* Header bar */}
      <Header currentUser={currentUser} onNavigate={handleNavigate} onLogout={handleLogout} />

      {/* Offline Mode Alert */}
      {isOfflineMode && (
        <Alert severity="info" sx={{ square: true, justifyContent: 'center', bgcolor: 'rgba(255, 243, 224, 0.95)', color: 'primary.main', borderBottom: '1px solid', borderColor: 'divider' }}>
          현재 <strong>로컬 스토리지 모드</strong>로 작동 중입니다 (json-server 오프라인). 데이터가 브라우저에 임시 저장됩니다.
        </Alert>
      )}

      {/* Content area with React Router Routes */}
      <Box sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home books={books} onNavigate={handleNavigate} />} />
          <Route path="/about" element={<HowToUse onNavigate={handleNavigate} />} />
          <Route path="/list" element={<BookListScreen books={books} onNavigate={handleNavigate} />} />
          <Route path="/login" element={<LoginSignup onLoginSuccess={handleLoginSuccess} onNavigate={handleNavigate} />} />
          <Route path="/write" element={
            <BookFormScreen 
              userApiKey={userApiKey} 
              onSaveApiKey={handleSaveApiKey} 
              onSave={handleSaveBook} 
              onNavigate={handleNavigate} 
            />
          } />
          <Route path="/edit/:id" element={
            <EditBookWrapper 
              books={books} 
              userApiKey={userApiKey} 
              onSaveApiKey={handleSaveApiKey} 
              onSave={handleSaveBook} 
              onNavigate={handleNavigate} 
            />
          } />
          <Route path="/detail/:id" element={
            <BookDetailScreenWrapper 
              userApiKey={userApiKey} 
              onSaveApiKey={handleSaveApiKey} 
              onNavigate={handleNavigate} 
              onDelete={handleDeleteBook} 
              onUpdateBook={handleUpdateBook}
              isOfflineMode={isOfflineMode}
            />
          } />
        </Routes>
      </Box>

      {/* Alert toast notification */}
      <Snackbar 
        open={toast.open} 
        autoHideDuration={4000} 
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseToast} severity={toast.severity} sx={{ width: '100%', borderRadius: '8px' }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}
