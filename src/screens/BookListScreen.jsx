import React, { useState } from 'react'
import { Container, Grid, Card, CardContent, Typography, Box, MenuItem, TextField, Select, FormControl, InputLabel } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort'
import SearchIcon from '@mui/icons-material/Search'
import VisibilityIcon from '@mui/icons-material/Visibility'
import FavoriteIcon from '@mui/icons-material/Favorite'

// Helper component to render a premium book cover
export function BookCover({ title, author, imageUrl, height = 240 }) {
  if (imageUrl) {
    return (
      <Box 
        sx={{ 
          height, 
          width: '100%', 
          position: 'relative',
          borderBottom: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {/* Blurred Background Layer to fill the horizontal aspect ratio */}
        <Box 
          sx={{ 
            position: 'absolute',
            top: -10, 
            left: -10, 
            right: -10, 
            bottom: -10,
            backgroundImage: `url(${imageUrl})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            filter: 'blur(8px) brightness(0.6)',
            zIndex: 1
          }}
        />
        {/* Sharp Centered Image Layer showing the full vertical cover */}
        <Box 
          component="img"
          src={imageUrl}
          alt={title}
          sx={{ 
            height: '90%', 
            width: 'auto',
            maxHeight: '100%',
            objectFit: 'contain',
            zIndex: 2,
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        />
      </Box>
    )
  }

  // Generate a beautiful, stable gradient based on the title string
  const getGradient = (text) => {
    const hash = text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    const hue1 = hash % 360
    const hue2 = (hash * 1.5) % 360
    return `linear-gradient(135deg, hsl(${hue1}, 50%, 35%) 0%, hsl(${hue2}, 40%, 25%) 100%)`
  }

  return (
    <Box 
      sx={{ 
        height, 
        width: '100%', 
        background: getGradient(title),
        borderBottom: '1px solid',
        borderColor: 'divider',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        p: 2.5,
        boxShadow: 'inset 0 0 30px rgba(0,0,0,0.4)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '10px',
          width: '1px',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          boxShadow: '0 0 5px rgba(255,255,255,0.2)'
        }
      }}
    >
      <Box sx={{ border: '1px solid rgba(245, 158, 11, 0.2)', p: 1, borderRadius: '4px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: 'Noto Serif KR, serif', 
            fontWeight: 700, 
            color: 'primary.main', 
            textAlign: 'center', 
            lineHeight: 1.4,
            textShadow: '0 2px 4px rgba(0,0,0,0.8)',
            wordBreak: 'keep-all',
            mt: 2
          }}
        >
          {title}
        </Typography>
        <Box sx={{ textAlign: 'center', mb: 1 }}>
          <Typography 
            variant="caption" 
            sx={{ 
              color: 'text.secondary', 
              fontSize: '0.75rem',
              display: 'block',
              mb: 0.5
            }}
          >
            작가의 산책 서재
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              fontWeight: 500, 
              color: '#f8fafc',
              textShadow: '0 1px 2px rgba(0,0,0,0.8)'
            }}
          >
            {author} 著
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default function BookListScreen({ books, onNavigate }) {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('newest')

  // Search filter
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
            <Grid item xs={12} sm={6} md={4} key={book.id}>
              <Card 
                onClick={() => onNavigate('detail', book.id)}
                sx={{ 
                  height: '100%', 
                  cursor: 'pointer',
                  display: 'flex', 
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  overflow: 'hidden',
                  borderRadius: '12px'
                }}
              >
                <BookCover title={book.title} author={book.author} imageUrl={book.coverImageUrl} />
                <CardContent sx={{ flexGrow: 1, p: 2.5, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography 
                      variant="h6" 
                      component="h2" 
                      sx={{ 
                        fontFamily: 'Noto Serif KR, serif', 
                        fontWeight: 700, 
                        mb: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {book.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontWeight: 500 }}>
                      {book.author} 작가
                    </Typography>
                  </Box>
                  
                  {/* Stats Footer */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 1.5, borderTop: '1px solid', borderColor: 'divider' }}>
                    <Typography variant="caption" color="text.secondary">
                      {new Date(book.createdAt).toLocaleDateString('ko-KR')}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <VisibilityIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                        <Typography variant="caption" color="text.secondary">{book.views || 0}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <FavoriteIcon sx={{ fontSize: 14, color: 'error.main' }} />
                        <Typography variant="caption" color="text.secondary">{book.likes || 0}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}
