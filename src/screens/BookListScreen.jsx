import React, { useState, useEffect } from 'react'
import { Container, Grid, Typography, Box, MenuItem, TextField, Select, FormControl, InputLabel } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort'
import SearchIcon from '@mui/icons-material/Search'
import BookItem from '../components/BookItem'

/**
 * Book List Screen component (PostList style)
 * Orchestrates the display of the full book list with filtering and sorting
 */
export default function BookListScreen({ books, onNavigate }) {
  const [searchInput, setSearchInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('newest')

  // Debouncing effect: searchInput이 바뀌고 300ms 뒤에 searchQuery를 업데이트
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchInput)
    }, 300)

    return () => clearTimeout(timer) // 사용자가 계속 입력하면 이전 타이머를 취소
  }, [searchInput])

  // Search filter - searchQuery를 기준으로 필터링
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Sort logic
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.createdAt) - new Date(a.createdAt)
      case 'oldest':
        return new Date(a.createdAt) - new Date(b.createdAt)
      case 'views':
        return (b.views || 0) - (a.views || 0)
      case 'likes':
        return (b.likes || 0) - (a.likes || 0)
      default:
        return 0
    }
  })

  return (
    <Container maxWidth="lg" className="fade-in-screen" sx={{ py: 6 }}>
      {/* Title */}
      <Box sx={{ mb: 5, borderBottom: '1px solid', borderColor: 'divider', pb: 3 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
          전체 작품 목록
        </Typography>
        <Typography variant="body1" color="text.secondary">
          서재에 등록된 모든 작가님들의 작품들을 구경하고, 아름다운 AI 표지를 가진 작품들을 탐색해 보세요.
        </Typography>
      </Box>

      {/* Filter and Search controls */}
      <Grid container spacing={2} sx={{ mb: 4 }} alignItems="center">
        <Grid item xs={12} sm={6} md={8}>
          <TextField
            fullWidth
            placeholder="도서 제목 또는 작가 이름 검색..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />,
              style: { borderRadius: '24px', backgroundColor: '#ffffff' }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth size="medium">
            <InputLabel id="sort-label" sx={{ color: 'text.secondary' }}>정렬 기준</InputLabel>
            <Select
              labelId="sort-label"
              value={sortBy}
              label="정렬 기준"
              onChange={(e) => setSortBy(e.target.value)}
              startAdornment={<SortIcon sx={{ color: 'text.secondary', mr: 1 }} />}
              sx={{ borderRadius: '24px', backgroundColor: '#ffffff' }}
            >
              <MenuItem value="newest">최신순</MenuItem>
              <MenuItem value="oldest">오래된순</MenuItem>
              <MenuItem value="views">조회수순</MenuItem>
              <MenuItem value="likes">좋아요순</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Grid of Books */}
      {sortedBooks.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 8, bgcolor: 'background.paper', borderRadius: '16px', border: '1px dashed', borderColor: 'divider' }}>
          <Typography variant="h6" color="text.secondary">
            검색 결과에 맞는 도서가 존재하지 않습니다.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3.5}>
          {sortedBooks.map((book) => (
            <BookItem key={book.id} book={book} onNavigate={onNavigate} />
          ))}
        </Grid>
      )}
    </Container>
  )
}
