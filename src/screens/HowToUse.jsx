import React from 'react'
import { Container, Box, Typography, Button, Paper, Grid } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import CollectionsIcon from '@mui/icons-material/Collections'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function HowToUse({ onNavigate }) {
  const steps = [
    {
      num: '01',
      title: '회원 가입 & 로그인',
      desc: '로그인 후 나만의 창작 공간을 활성화합니다. 회원이 아닐 경우 간편한 회원 가입으로 바로 작가가 될 수 있습니다.',
      icon: <CreateIcon sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      num: '02',
      title: '새로운 도서 집필',
      desc: '홈 화면이나 내비게이션의 [글 작성]을 눌러 글의 제목, 작가명, 내용을 입력하여 새로운 작품을 서재에 등록합니다.',
      icon: <CreateIcon sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      num: '03',
      title: 'AI 표지 자동 생성',
      desc: '작품의 상세 화면에서 OpenAI API Key를 입력하고, 작품 내용에 어울리는 이미지 프롬프트를 바탕으로 AI 표지 생성을 요청합니다.',
      icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      num: '04',
      title: '표지 저장 및 서재 전시',
      desc: '생성된 표지는 자동으로 서재 데이터베이스에 PATCH 형태로 저장되어 책 목록과 상세 화면에 영구 전시됩니다.',
      icon: <CollectionsIcon sx={{ fontSize: 40, color: 'primary.main' }} />
    }
  ]

  return (
    <Container maxWidth="lg" className="fade-in-screen" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 800, mb: 2, color: 'primary.main' }}>
          서재 이용 방법
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
          누구나 자유롭게 글을 집필하고, AI 이미지 모델을 활용하여 작품에 가장 어울리는 아름다운 표지를 제작하는 방법입니다.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {steps.map((step, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <Paper 
              sx={{ 
                p: 4, 
                height: '100%', 
                bgcolor: 'background.paper', 
                border: '1px solid', 
                borderColor: 'divider',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px'
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box sx={{ bgcolor: 'rgba(245, 158, 11, 0.1)', p: 1.5, borderRadius: '12px' }}>
                  {step.icon}
                </Box>
                <Typography variant="h2" sx={{ fontSize: '4rem', fontWeight: 900, color: 'rgba(133, 83, 0, 0.05)', lineHeight: 0.8, select: 'none' }}>
                  {step.num}
                </Typography>
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
                {step.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {step.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center' }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          endIcon={<ArrowForwardIcon />}
          onClick={() => onNavigate('home')}
          sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
        >
          서재 홈으로 이동하기
        </Button>
      </Box>
    </Container>
  )
}
