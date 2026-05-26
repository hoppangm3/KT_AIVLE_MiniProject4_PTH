import React, { useState } from 'react'
import { Container, Grid, Typography, Box, Button, Card, CardContent, Paper } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import VisibilityIcon from '@mui/icons-material/Visibility'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { BookCover } from './BookListScreen'

export default function Home({ books, onNavigate }) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // 1. Sort books by popularity (views + likes) for the "실시간 인기작" section
  const popularBooks = [...books].sort((a, b) => {
    const scoreA = (a.views || 0) + (a.likes || 0) * 2
    const scoreB = (b.views || 0) + (b.likes || 0) * 2
    return scoreB - scoreA
  })

  // 2. Pagination Math
  const totalPages = 5 // Fixed 1 to 5 per Figma / user requirements
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  // Slice books based on current page
  const currentBooks = popularBooks.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <Container maxWidth="lg" className="fade-in-screen" sx={{ py: 6 }}>
      {/* Welcome Banner */}
      <Paper 
        sx={{ 
          p: { xs: 4, md: 6 }, 
          mb: 6, 
          bgcolor: 'background.paper', 
          border: '1px solid', 
          borderColor: 'divider',
          borderRadius: '24px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #e7eefe 0%, #f0f3ff 100%)',
          boxShadow: '0 10px 30px rgba(0, 88, 190, 0.05)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h2" component="h1" sx={{ fontFamily: '"tvNEnjoystories", sans-serif', fontWeight: 700, mb: 2, color: 'text.primary', fontSize: { xs: '2.8rem', md: '4.5rem' } }}>
            "걷기가 서재"
          </Typography>
          <Typography variant="h6" color="primary.main" sx={{ fontWeight: 600, letterSpacing: '0.05em', maxWidth: '600px', mx: 'auto' }}>
            글을 쓰고, 나만의 표지를 완성하는 창작 플랫폼
          </Typography>
        </Box>
        {/* Subtle decorative circle */}
        <Box sx={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%)' }} />
      </Paper>

      {/* Central Navigation Buttons (3 items) */}
      <Grid container spacing={3} sx={{ mb: 8 }}>
        <Grid item xs={12} sm={4}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => onNavigate('write')}
            startIcon={<CreateIcon sx={{ fontSize: 24 }} />}
            sx={{ py: 3, borderRadius: '16px', fontSize: '1.1rem', background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}
          >
            글 작성
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={() => onNavigate('about')}
            startIcon={<HelpOutlineIcon sx={{ fontSize: 24 }} />}
            sx={{ py: 3, borderRadius: '16px', fontSize: '1.1rem', borderColor: 'secondary.main', bgcolor: 'background.paper', color: 'secondary.main', '&:hover': { bgcolor: 'rgba(0, 88, 190, 0.04)', borderColor: 'secondary.main' } }}
          >
            이용 방법
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => onNavigate('list')}
            startIcon={<FormatListBulletedIcon sx={{ fontSize: 24 }} />}
            sx={{ py: 3, borderRadius: '16px', fontSize: '1.1rem', background: 'linear-gradient(135deg, #0058be 0%, #2170e4 100%)', color: '#fff' }}
          >
            작품 목록
          </Button>
        </Grid>
      </Grid>

      {/* Popular Works Grid Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 3, pb: 1, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>실시간 인기작 Top 6</span>
          <Typography variant="caption" color="text.secondary">조회수와 좋아요 반영</Typography>
        </Typography>
      </Box>

      {currentBooks.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 6, bgcolor: 'background.paper', borderRadius: '16px', border: '1px dashed', borderColor: 'divider' }}>
          <Typography variant="body1" color="text.secondary">서재에 등록된 도서가 없습니다. 먼저 첫 책을 등록해 보세요!</Typography>
        </Box>
      ) : (
        <Grid container spacing={3.5}>
          {currentBooks.map((book, idx) => {
            const globalIndex = indexOfFirstItem + idx + 1
            return (
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
                    borderRadius: '12px',
                    position: 'relative'
                  }}
                >
                  {/* Popularity Badge */}
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      top: 12, 
                      left: 12, 
                      bgcolor: globalIndex <= 3 ? '#f59e0b' : '#dce2f3', 
                      color: globalIndex <= 3 ? '#613b00' : '#151c27',
                      fontWeight: 800,
                      px: 1.5,
                      py: 0.5,
                      borderRadius: '8px',
                      zIndex: 10,
                      boxShadow: '0 2px 8px rgba(133, 83, 0, 0.1)',
                      fontSize: '0.85rem'
                    }}
                  >
                    Top {globalIndex}
                  </Box>
                  <BookCover title={book.title} author={book.author} imageUrl={book.coverImageUrl} />
                  <CardContent sx={{ flexGrow: 1, p: 2.5, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box sx={{ mt: 1 }}>
                      <Typography 
                        variant="h6" 
                        component="h3" 
                        sx={{ 
                          fontFamily: 'Noto Serif KR, serif', 
                          fontWeight: 700, 
                          mb: 0.5,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {book.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {book.author} 작가
                      </Typography>
                    </Box>

                    {/* Card Footer Info */}
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
            )
          })}
        </Grid>
      )}

      {/* Pagination Controls 1, 2, 3, 4, 5 */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 6 }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <Button
            key={pageNum}
            variant={currentPage === pageNum ? 'contained' : 'outlined'}
            color={currentPage === pageNum ? 'primary' : 'secondary'}
            onClick={() => setCurrentPage(pageNum)}
            sx={{ 
              minWidth: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              p: 0,
              fontWeight: currentPage === pageNum ? 700 : 500
            }}
          >
            {pageNum}
          </Button>
        ))}
      </Box>
    </Container>
  )
}
