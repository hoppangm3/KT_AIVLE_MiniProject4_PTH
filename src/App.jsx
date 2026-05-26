import React, { useState, useEffect } from 'react'
import { Box, Container, Alert, Snackbar, Typography } from '@mui/material'
import Header from './components/Header'
import Home from './screens/Home'
import HowToUse from './screens/HowToUse'
import LoginSignup from './screens/LoginSignup'
import BookListScreen from './screens/BookListScreen'
import BookFormScreen from './screens/BookFormScreen'
import BookDetailScreen from './screens/BookDetailScreen'
import { API_BASE_URL } from './config'
import dbData from '../db.json'

// Fallback mock initial books for LocalStorage Mode
const initialLocalStorageBooks = dbData.books

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home')
  const [selectedBookId, setSelectedBookId] = useState(null)
  
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

  // Core loading function
  const loadBooks = async () => {
    try {
      const res = await fetch(API_BASE_URL)
      if (!res.ok) throw new Error('API 연결 에러')
      const data = await res.json()
      setBooks(data)
      setIsOfflineMode(false)
    } catch (err) {
      console.warn('json-server가 응답하지 않습니다. 로컬 스토리지 모드로 자동 전환합니다.', err)
      setIsOfflineMode(true)
      
      // Load from LocalStorage
      const localBooks = localStorage.getItem('mock_books')
      if (localBooks && JSON.parse(localBooks).length === initialLocalStorageBooks.length) {
        setBooks(JSON.parse(localBooks))
      } else {
        localStorage.setItem('mock_books', JSON.stringify(initialLocalStorageBooks))
        setBooks(initialLocalStorageBooks)
      }
    }
  }

  // Handle routing / navigation
  const handleNavigate = (screen, bookId = null) => {
    window.scrollTo(0, 0)
    setCurrentScreen(screen)
    if (bookId) setSelectedBookId(bookId)
  }

  // Handle Mock Login / Signup
  const handleLoginSuccess = (user) => {
    setCurrentUser(user)
    localStorage.setItem('current_user', JSON.stringify(user))
    setToast({ open: true, message: `${user.username} 작가님, 서재에 오신 것을 환영합니다!`, severity: 'success' })
    setCurrentScreen('home')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('current_user')
    setToast({ open: true, message: '성공적으로 로그아웃되었습니다.', severity: 'info' })
    setCurrentScreen('home')
  }

  const handleSaveApiKey = (key) => {
    setUserApiKey(key)
  }

  // CRUD actions helper
  const handleSaveBook = async (payload) => {
    const isEdit = !!selectedBookId
    
    if (isOfflineMode) {
      // LocalStorage Mode Save: Immutability spread pattern
      let updatedBooks
      if (isEdit) {
        updatedBooks = books.map(b => b.id === selectedBookId ? { ...b, ...payload } : b)
        setToast({ open: true, message: '작품 정보가 수정되었습니다. (로컬 저장)', severity: 'success' })
      } else {
        const newBook = { id: Date.now().toString(), ...payload }
        updatedBooks = [...books, newBook]
        setToast({ open: true, message: '새로운 작품이 등록되었습니다. (로컬 저장)', severity: 'success' })
      }
      localStorage.setItem('mock_books', JSON.stringify(updatedBooks))
      setBooks(updatedBooks)
      handleNavigate(isEdit ? 'detail' : 'list', selectedBookId)
    } else {
      // REST API Mode Save
      try {
        const url = isEdit ? `${API_BASE_URL}/${selectedBookId}` : API_BASE_URL
        const method = isEdit ? 'PATCH' : 'POST'
        
        const res = await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })

        if (res.ok) {
          setToast({ 
            open: true, 
            message: isEdit ? '작품이 성공적으로 수정되었습니다.' : '새로운 작품이 등록되었습니다.', 
            severity: 'success' 
          })
          await loadBooks()
          handleNavigate(isEdit ? 'detail' : 'list', selectedBookId)
        } else {
          throw new Error('저장 실패')
        }
      } catch (err) {
        setToast({ open: true, message: '서버 저장 중 오류가 발생했습니다.', severity: 'error' })
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
        const res = await fetch(`${API_BASE_URL}/${id}`, {
          method: 'DELETE'
        })
        if (res.ok) {
          setToast({ open: true, message: '작품이 성공적으로 삭제되었습니다.', severity: 'info' })
          await loadBooks()
          handleNavigate('list')
        } else {
          throw new Error('삭제 실패')
        }
      } catch (err) {
        setToast({ open: true, message: '서버 삭제 중 오류가 발생했습니다.', severity: 'error' })
      }
    }
  }

  // Helper to find the active book object
  const activeBook = books.find(b => b.id === selectedBookId)

  const handleUpdateBook = async (id, updatedFields) => {
    if (isOfflineMode) {
      const updatedBooks = books.map(b => b.id === id ? { ...b, ...updatedFields } : b)
      localStorage.setItem('mock_books', JSON.stringify(updatedBooks))
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

      {/* Content area with screen switching */}
      <Box sx={{ flexGrow: 1 }}>
        {currentScreen === 'home' && (
          <Home books={books} onNavigate={handleNavigate} />
        )}
        {currentScreen === 'about' && (
          <HowToUse onNavigate={handleNavigate} />
        )}
        {currentScreen === 'list' && (
          <BookListScreen books={books} onNavigate={handleNavigate} />
        )}
        {currentScreen === 'write' && (
          <BookFormScreen 
            book={activeBook} 
            userApiKey={userApiKey} 
            onSaveApiKey={handleSaveApiKey} 
            onSave={handleSaveBook} 
            onNavigate={handleNavigate} 
          />
        )}
        {currentScreen === 'login-signup' && (
          <LoginSignup onLoginSuccess={handleLoginSuccess} onNavigate={handleNavigate} />
        )}
        {currentScreen === 'detail' && (
          <BookDetailScreen 
            bookId={selectedBookId} 
            userApiKey={userApiKey} 
            onSaveApiKey={handleSaveApiKey} 
            onNavigate={handleNavigate} 
            onDelete={handleDeleteBook} 
            onUpdateBook={handleUpdateBook}
            isOfflineMode={isOfflineMode}
          />
        )}
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
