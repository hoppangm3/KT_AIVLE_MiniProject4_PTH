import React from 'react'
import { Grid, Card, CardContent, Typography, Box } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import FavoriteIcon from '@mui/icons-material/Favorite'
import BookCover from './BookCover'

/**
 * Individual Book Item component (PostItem style)
 * Handles the display of a single book card
 */
export default function BookItem({ book, onNavigate }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
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
  )
}
