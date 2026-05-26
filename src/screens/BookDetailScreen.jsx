import React, { useState, useEffect } from 'react'
import { Container, Grid, Paper, Typography, Box, Button, TextField, Select, MenuItem, FormControl, InputLabel, CircularProgress, Alert, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, FormHelperText } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import VisibilityIcon from '@mui/icons-material/Visibility'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import BookCover from '../components/BookCover'
import { apiService } from '../services/apiService'
import { aiService } from '../services/aiService'

export default function BookDetailScreen({ bookId, userApiKey, onSaveApiKey, onNavigate, onDelete, onUpdateBook, isOfflineMode }) {
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false)
  const [apiKey, setApiKey] = useState(userApiKey || '')

  // AI Generation States
  const [genLoading, setGenLoading] = useState(false)
  const [genError, setGenError] = useState('')
  const [genSuccess, setGenSuccess] = useState(false)

  // Custom API Gateway Options
  const [model, setModel] = useState('gpt-image-2')
  const [size, setSize] = useState('1024x1536')
  const [resolution, setResolution] = useState('1280')

  // Delete Dialog state
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

  // 1. Fetch Book Details on mount and Increment Views
  useEffect(() => {
    async function loadBookData() {
      try {
        setLoading(true)
        if (isOfflineMode) {
          // LocalStorage Mode: fetch from LocalStorage directly
          const localBooksStr = localStorage.getItem('mock_books')
          if (!localBooksStr) throw new Error('도서 목록이 존재하지 않습니다.')
          const localBooks = JSON.parse(localBooksStr)
          const targetBook = localBooks.find(b => b.id === bookId)
          if (!targetBook) throw new Error('도서를 찾을 수 없습니다.')

          // book_images에서 이미지도 복원
          const savedImages = JSON.parse(localStorage.getItem('book_images') || '{}')
          const fullBook = savedImages[targetBook.id]
            ? { ...targetBook, coverImageUrl: savedImages[targetBook.id] }
            : targetBook

          const newViews = (fullBook.views || 0) + 1
          const updatedBook = { ...fullBook, views: newViews }

          if (onUpdateBook) {
            onUpdateBook(bookId, { views: newViews })
          }
          setBook(updatedBook)
        } else {
          // REST API Mode: fetch from json-server using service
          const data = await apiService.getBookById(bookId)
          setBook(data)

          // Auto-increment view count using service
          const newViews = (data.views || 0) + 1
          await apiService.updateBook(bookId, { views: newViews })
          
          setBook(prev => ({ ...prev, views: newViews }))
          if (onUpdateBook) {
            onUpdateBook(bookId, { views: newViews })
          }
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    loadBookData()
  }, [bookId, isOfflineMode])

  // 2. Increment Likes
  const handleLike = async () => {
    if (!book || liked) return
    try {
      const newLikes = (book.likes || 0) + 1

      if (isOfflineMode) {
        if (onUpdateBook) {
          onUpdateBook(bookId, { likes: newLikes })
        }
        setBook(prev => ({ ...prev, likes: newLikes }))
        setLiked(true)
      } else {
        await apiService.updateBook(bookId, { likes: newLikes })
        setBook(prev => ({ ...prev, likes: newLikes }))
        setLiked(true)
        if (onUpdateBook) {
          onUpdateBook(bookId, { likes: newLikes })
        }
      }
    } catch (err) {
      console.error(err)
    }
  }

  // 3. AI Cover Generation
  const handleGenerateCover = async () => {
    if (!apiKey.trim()) {
      setGenError('OpenAI API Key를 입력해 주세요.')
      return
    }

    // Save API key globally in App state
    onSaveApiKey(apiKey)

    setGenLoading(true)
    setGenError('')
    setGenSuccess(false)

    try {
      const compressedSrc = await aiService.generateBookCover(
        book.title, 
        book.content, 
        book.prompt, 
        apiKey, 
        { model, size, resolution }
      )

      // Save generated image URL based on offline/online mode
      if (isOfflineMode) {
        if (onUpdateBook) {
          onUpdateBook(bookId, { coverImageUrl: compressedSrc })
        }
        setBook(prev => ({ ...prev, coverImageUrl: compressedSrc }))
        setGenSuccess(true)
      } else {
        await apiService.updateBook(bookId, { coverImageUrl: compressedSrc })
        if (onUpdateBook) {
          onUpdateBook(bookId, { coverImageUrl: compressedSrc })
        }
        setBook(prev => ({ ...prev, coverImageUrl: compressedSrc }))
        setGenSuccess(true)
      }

    } catch (err) {
      console.error(err)
      if (err.message.includes('401') || err.message.includes('API key')) {
        setGenError('인증 실패(401): 입력하신 OpenAI API Key가 올바른지 확인해 주세요.')
      } else if (err.message.includes('429')) {
        setGenError('사용량 초과(429): API 할당량이 만료되었거나 단시간에 너무 많이 요청했습니다.')
      } else {
        setGenError(err.message || '표지 생성에 실패했습니다.')
      }
    } finally {
      setGenLoading(false)
    }
  }

  // Handle book deletion
  const handleDeleteConfirm = () => {
    setOpenDeleteDialog(false)
    onDelete(bookId)
  }

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <CircularProgress color="primary" />
      </Box>
    )
  }

  if (!book) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Alert severity="error">도서 정보를 찾을 수 없습니다.</Alert>
        <Button startIcon={<ArrowBackIcon />} onClick={() => onNavigate('home')} sx={{ mt: 2 }}>
          홈으로 돌아가기
        </Button>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" className="fade-in-screen" sx={{ py: 6 }}>
      {/* Back button */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => onNavigate('list')}
        sx={{ mb: 4, color: 'text.secondary' }}
      >
        전체 목록으로 돌아가기
      </Button>

      <Grid container spacing={5}>
        {/* Left Side: Book Cover and Details */}
        <Grid item xs={12} md={5}>
          <Box className={genLoading ? 'generating-cover' : ''} sx={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid', borderColor: 'divider', boxShadow: '0 8px 24px rgba(133, 83, 0, 0.15)', bgcolor: 'background.paper' }}>
            <BookCover title={book.title} author={book.author} imageUrl={book.coverImageUrl} height={420} />
          </Box>

          {/* Quick Info & Actions */}
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <VisibilityIcon sx={{ color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">{book.views || 0} 조회</Typography>
              </Box>
              <Button
                onClick={handleLike}
                startIcon={liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                disabled={liked}
                sx={{
                  color: liked ? 'error.main' : 'text.secondary',
                  textTransform: 'none',
                  '&:disabled': { color: 'error.main' }
                }}
              >
                {book.likes || 0} 좋아요
              </Button>
            </Box>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                startIcon={<EditIcon />}
                onClick={() => onNavigate('write', book.id)}
                sx={{ borderRadius: '12px' }}
              >
                수정
              </Button>
              <Button
                variant="outlined"
                color="error"
                size="small"
                startIcon={<DeleteIcon />}
                onClick={() => setOpenDeleteDialog(true)}
                sx={{ borderRadius: '12px' }}
              >
                삭제
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Right Side: Content and AI Generator */}
        <Grid item xs={12} md={7}>
          {/* Book Content Paper */}
          <Paper sx={{ p: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: '16px', mb: 4 }}>
            <Typography variant="h4" component="h1" sx={{ fontFamily: 'Noto Serif KR, serif', fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
              {book.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main', mb: 3 }}>
              {book.author} 작가
            </Typography>

            <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', minHeight: '120px', fontSize: '1.05rem', color: 'text.primary' }}>
              {book.content}
            </Typography>
          </Paper>

          {/* AI Cover Generator Paper */}
          <Paper sx={{ p: 4, bgcolor: 'rgba(240, 243, 255, 0.6)', border: '1px solid', borderColor: 'divider', borderRadius: '16px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
              <AutoAwesomeIcon color="primary" />
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                AI 표지 자동 생성기
              </Typography>
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              본문 내용을 기반으로 AI가 상상한 어울리는 표지 예술을 자동으로 생성하여 책 표지에 입힙니다.
            </Typography>

            {genError && <Alert severity="error" sx={{ mb: 3, borderRadius: '8px' }}>{genError}</Alert>}
            {genSuccess && <Alert severity="success" sx={{ mb: 3, borderRadius: '8px' }}>표지가 성공적으로 생성되어 서재에 반영되었습니다!</Alert>}

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <FormControl fullWidth>
                <InputLabel id="model-label" sx={{ color: 'text.secondary' }}>생성 모델</InputLabel>
                <Select
                  labelId="model-label"
                  value={model}
                  label="생성 모델"
                  onChange={(e) => setModel(e.target.value)}
                  sx={{ borderRadius: '12px' }}
                >
                  <MenuItem value="gpt-image-2">gpt-image-2 (선택 가능)</MenuItem>
                  <MenuItem value="gpt-image-1" disabled>gpt-image-1 (지원 종료)</MenuItem>
                  <MenuItem value="dall-e-3" disabled>DALL-E 3 (선택 불가)</MenuItem>
                  <MenuItem value="dall-e-2" disabled>DALL-E 2 (선택 불가)</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="resolution-label" sx={{ color: 'text.secondary' }}>해상도 선택</InputLabel>
                <Select
                  labelId="resolution-label"
                  value={resolution}
                  label="해상도 선택"
                  onChange={(e) => setResolution(e.target.value)}
                  sx={{ borderRadius: '12px' }}
                >
                  <MenuItem value="960">960 (SD - 빠른 속도)</MenuItem>
                  <MenuItem value="1280">1280 (HD - 표준)</MenuItem>
                  <MenuItem value="1920">1920 (FHD - 고화질)</MenuItem>
                  <MenuItem value="2046">2046 (UHD - 초고화질)</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="size-label" sx={{ color: 'text.secondary' }}>표지 비율</InputLabel>
                <Select
                  labelId="size-label"
                  value={size}
                  label="표지 비율"
                  onChange={(e) => setSize(e.target.value)}
                  sx={{ borderRadius: '12px' }}
                >
                  <MenuItem value="1024x1536">세로 표준형 (2:3 비율)</MenuItem>
                  <MenuItem value="1024x1024">정사각형 (1:1 비율)</MenuItem>
                </Select>
              </FormControl>

              {/* API Key Input */}
              <TextField
                label="OpenAI API Key"
                type={apiKey ? "password" : "text"}
                variant="outlined"
                fullWidth
                required
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-... 로 시작하는 API Key를 입력하세요."
                InputProps={{ style: { borderRadius: '12px' } }}
              />

              {/* Generate button */}
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={genLoading ? <CircularProgress size={20} color="inherit" /> : <AutoAwesomeIcon />}
                disabled={genLoading}
                onClick={handleGenerateCover}
                sx={{ py: 1.5, borderRadius: '12px' }}
              >
                {genLoading ? 'AI 표지 생성 중...' : 'AI 표지 생성 및 서재 등록'}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        PaperProps={{
          style: { borderRadius: '16px', backgroundColor: '#ffffff' }
        }}
      >
        <DialogTitle sx={{ fontWeight: 700, color: 'text.primary' }}>정말로 작품을 삭제하시겠습니까?</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: 'text.secondary' }}>
            삭제한 작품과 생성된 표지 이미지는 다시 복구할 수 없습니다. 계속 진행하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 2.5, pt: 0 }}>
          <Button onClick={() => setOpenDeleteDialog(false)} color="secondary" variant="outlined" sx={{ borderRadius: '8px' }}>
            취소
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" variant="contained" sx={{ borderRadius: '8px' }}>
            삭제 완료
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}