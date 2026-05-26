import React, { useState } from 'react'
import { Container, Paper, Box, Typography, TextField, Button, Alert } from '@mui/material'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import LockOpenIcon from '@mui/icons-material/LockOpen'

export default function LoginSignup({ onLoginSuccess, onNavigate }) {
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState({ type: '', text: '' })

  const getStoredUsers = () => {
    const users = localStorage.getItem('mock_users')
    return users ? JSON.parse(users) : []
  }

  const handleAuth = (e) => {
    e.preventDefault()
    setMessage({ type: '', text: '' })

    if (!username.trim() || !password.trim()) {
      setMessage({ type: 'error', text: '아이디와 비밀번호를 모두 입력해 주세요.' })
      return
    }

    const users = getStoredUsers()

    if (isLoginMode) {
      // Login Check
      const foundUser = users.find(u => u.username === username && u.password === password)
      if (foundUser) {
        setMessage({ type: 'success', text: '로그인 성공! 홈 화면으로 이동합니다.' })
        setTimeout(() => {
          onLoginSuccess(foundUser)
        }, 1000)
      } else {
        setMessage({ type: 'error', text: '아이디 또는 비밀번호가 일치하지 않습니다.' })
      }
    } else {
      // Sign Up Check
      const userExists = users.some(u => u.username === username)
      if (userExists) {
        setMessage({ type: 'error', text: '이미 사용 중인 아이디입니다.' })
        return
      }

      const newUser = { id: Date.now().toString(), username, password }
      users.push(newUser)
      localStorage.setItem('mock_users', JSON.stringify(users))

      setMessage({ type: 'success', text: '회원가입이 완료되었습니다! 로그인해 주세요.' })
      setIsLoginMode(true)
      setPassword('')
    }
  }

  return (
    <Container maxWidth="xs" className="fade-in-screen" sx={{ py: 8 }}>
      <Paper 
        sx={{ 
          p: 4, 
          bgcolor: 'background.paper', 
          border: '1px solid', 
          borderColor: 'divider', 
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(133, 83, 0, 0.08)'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
          <Box 
            sx={{ 
              bgcolor: 'rgba(245, 158, 11, 0.1)', 
              p: 2, 
              borderRadius: '50%', 
              color: 'primary.main',
              mb: 1.5 
            }}
          >
            {isLoginMode ? <LockOpenIcon fontSize="large" /> : <HowToRegIcon fontSize="large" />}
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {isLoginMode ? '작가 로그인' : '작가 회원가입'}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
            {isLoginMode ? '서재에 입장하기 위해 로그인해 주세요.' : '새로운 작가로 등록하여 작품을 창작하세요.'}
          </Typography>
        </Box>

        {message.text && (
          <Alert severity={message.type} sx={{ mb: 2, borderRadius: '8px' }}>
            {message.text}
          </Alert>
        )}

        <Box component="form" onSubmit={handleAuth} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="아이디"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="아이디를 입력하세요."
            InputProps={{ style: { borderRadius: '12px' } }}
          />
          <TextField
            label="비밀번호"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요."
            InputProps={{ style: { borderRadius: '12px' } }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ py: 1.5, mt: 1, borderRadius: '12px' }}
          >
            {isLoginMode ? '로그인' : '가입하기'}
          </Button>

          <Button
            variant="text"
            color="secondary"
            fullWidth
            onClick={() => {
              setIsLoginMode(!isLoginMode)
              setMessage({ type: '', text: '' })
            }}
            sx={{ mt: 1 }}
          >
            {isLoginMode ? '회원 가입' : '이미 가입하셨나요? 로그인'}
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
