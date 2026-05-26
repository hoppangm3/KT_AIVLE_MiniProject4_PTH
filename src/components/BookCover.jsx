import React from 'react'
import { Box, Typography } from '@mui/material'

/**
 * Helper component to render a premium book cover
 * Used across List, Detail, and Form screens
 */
export default function BookCover({ title, author, imageUrl, height = 240 }) {
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
