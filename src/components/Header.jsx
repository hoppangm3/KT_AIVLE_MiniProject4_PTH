import React from 'react'
import { Box, Typography, Button, Container, Link } from '@mui/material'
import BookIcon from '@mui/icons-material/MenuBook'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'

export default function Header({ currentUser, onNavigate, onLogout }) {
  return (
    <Box 
      sx={{ 
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(255, 255, 255, 0.85)'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
          {/* Logo / Home link */}
          <Box 
            onClick={() => onNavigate('home')}
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer',
              userSelect: 'none',
              transition: 'opacity 0.2s',
              '&:hover': { opacity: 0.85 }
            }}
          >
            <BookIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1.5 }} />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main', display: 'flex', alignItems: 'center' }}>
                걷기가 서재
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: { xs: 'none', sm: 'block' }, mt: -0.2 }}>
                글을 쓰고, 나만의 표지를 완성하는 창작 플랫폼
              </Typography>
            </Box>
          </Box>

          {/* Login Status / Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link 
              component="button"
              variant="body2" 
              onClick={() => onNavigate('about')}
              sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
            >
              이용 방법
            </Link>
            
            {currentUser ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: { xs: 'none', md: 'block' } }}>
                  <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>{currentUser.username}</Box> 작가님
                </Typography>
                <Button 
                  variant="outlined" 
                  color="secondary"
                  size="small"
                  onClick={onLogout}
                  startIcon={<LogoutIcon />}
                  sx={{ borderRadius: '16px' }}
                >
                  로그아웃
                </Button>
              </Box>
            ) : (
              <Button 
                variant="contained" 
                color="primary"
                size="small"
                onClick={() => onNavigate('login-signup')}
                startIcon={<LoginIcon />}
                sx={{ borderRadius: '16px' }}
              >
                login/sign-up
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
