import React, { useState, useEffect } from 'react'
import { Container, Paper, Box, Typography, TextField, Button, Grid, FormHelperText, Select, MenuItem, FormControl, InputLabel, CircularProgress, Alert, LinearProgress } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { BookCover } from './BookListScreen'

export default function BookFormScreen({ book, userApiKey, onSaveApiKey, onSave, onNavigate }) {
  const isEditMode = !!book
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [errors, setErrors] = useState({ title: false, content: false })

  // AI Cover States
  const [coverImageUrl, setCoverImageUrl] = useState('')
  const [apiKey, setApiKey] = useState(userApiKey || '')
  const [model, setModel] = useState('gpt-image-2')
  const [resolution, setResolution] = useState('1280')
  const [generating, setGenerating] = useState(false)
  const [genError, setGenError] = useState('')
  const [genSuccess, setGenSuccess] = useState(false)
  const [size, setSize] = useState('1024x1536')



  // Initialize fields on book changes (edit mode)
  useEffect(() => {
    if (isEditMode && book) {
      setTitle(book.title || '')
      setAuthor(book.author || '')
      setContent(book.content || '')
      setCoverImageUrl(book.coverImageUrl || '')
    } else {
      setTitle('')
      setAuthor('')
      setContent('')
      setCoverImageUrl('')
    }
  }, [book, isEditMode])

  const handleGenerateCover = async () => {
    if (!title.trim() || !content.trim()) {
      setGenError('AI 표지를 생성하려면 먼저 작품 제목과 본문 내용을 입력해야 합니다.')
      return
    }
    if (!apiKey.trim()) {
      setGenError('OpenAI API Key를 입력해 주세요.')
      return
    }

    onSaveApiKey(apiKey)
    setGenerating(true)
    setGenError('')
    setGenSuccess(false)

    try {
      const prompt = `Create a beautiful, abstract artistic book cover for a book titled "${title}". Book description: ${content}. Art style: professional digital art, high quality, oil paint details. Do NOT write any text or titles on the image.`

      // Map selected resolution to OpenAI API quality parameter
      let apiQuality = 'medium'
      if (resolution === '960') apiQuality = 'low'
      else if (resolution === '1280') apiQuality = 'medium'
      else if (resolution === '1920' || resolution === '2046') apiQuality = 'high'

      const body = {
        model: 'gpt-image-2',
        prompt,
        n: 1,
        size: size,
        quality: apiQuality,
        output_format: 'png'
      }

      let res = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey.trim()}`
        },
        body: JSON.stringify(body)
      })

      let data
      if (!res.ok) {
        let errBody
        try { errBody = await res.json() } catch { errBody = await res.text() }
        const errMsg = errBody?.error?.message || String(errBody)

        // Try alternate endpoint if 405 error occurs
        if (res.status === 405 || /Invalid method/i.test(errMsg)) {
          const altRes = await fetch('https://api.openai.com/v1/images/generate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey.trim()}`
            },
            body: JSON.stringify(body)
          })

          if (!altRes.ok) {
            let altErr
            try { altErr = await altRes.json() } catch { altErr = await altRes.text() }
            throw new Error(altErr?.error?.message || String(altErr) || 'OpenAI API 오류가 발생했습니다.')
          }
          data = await altRes.json()
        } else {
          throw new Error(errMsg || 'OpenAI API 오류가 발생했습니다.')
        }
      } else {
        data = await res.json()
      }

      const b64Json = data.data?.[0]?.b64_json
      if (!b64Json) {
        throw new Error('응답데이터에서 이미지 문자열(b64_json)을 찾을 수 없습니다.')
      }

      const imageSrc = `data:image/png;base64,${b64Json}`
      setCoverImageUrl(imageSrc)
      setGenSuccess(true)

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
      setGenerating(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simple Validation
    const titleError = !title.trim()
    const contentError = !content.trim()
    
    setErrors({ title: titleError, content: contentError })

    if (titleError || contentError) {
      return
    }

    const payload = {
      title: title.trim(),
      author: author.trim() || '작자 미상',
      content: content.trim(),
      coverImageUrl: coverImageUrl, // Save cover URL state
      updatedAt: new Date().toISOString(),
    }

    if (!isEditMode) {
      payload.createdAt = new Date().toISOString()
      payload.views = 0
      payload.likes = 0
    }

    onSave(payload)
  }

  return (
    <Container maxWidth="lg" className="fade-in-screen" sx={{ py: 6 }}>
      <Paper 
        sx={{ 
          p: 4, 
          bgcolor: 'background.paper', 
          border: '1px solid', 
          borderColor: 'divider', 
          borderRadius: '16px' 
        }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: 800, mb: 4, color: 'primary.main', borderBottom: '2px solid', pb: 1, borderColor: 'divider' }}>
          {isEditMode ? '작품 수정하기' : '새로운 작품 집필'}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={4}>
            {/* Left Column: Form Fields */}
            <Grid item xs={12} md={7}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                  <TextField
                    label="작품 제목"
                    variant="outlined"
                    fullWidth
                    required
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value)
                      if (errors.title) setErrors(prev => ({ ...prev, title: false }))
                    }}
                    error={errors.title}
                    placeholder="도서 제목을 입력하세요."
                    InputProps={{ style: { borderRadius: '12px' } }}
                  />
                  {errors.title && <FormHelperText error sx={{ ml: 1 }}>제목은 필수 입력 항목입니다.</FormHelperText>}
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField
                    label="필명 (작가명)"
                    variant="outlined"
                    fullWidth
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="작가명을 입력하세요."
                    InputProps={{ style: { borderRadius: '12px' } }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="작품 본문 및 내용"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={12}
                    required
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value)
                      if (errors.content) setErrors(prev => ({ ...prev, content: false }))
                    }}
                    error={errors.content}
                    placeholder="작품의 본문 내용을 상세히 적어주세요. 이 내용을 기반으로 나중에 AI가 어울리는 책 표지 이미지를 생성할 수 있습니다."
                    InputProps={{ style: { borderRadius: '12px' } }}
                  />
                  {errors.content && <FormHelperText error sx={{ ml: 1 }}>작품 본문 내용은 필수 입력 항목입니다.</FormHelperText>}
                </Grid>
              </Grid>
            </Grid>

            {/* Right Column: AI Cover Generator & Preview */}
            <Grid item xs={12} md={5}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AutoAwesomeIcon /> 작품 표지 미리보기
                </Typography>
                <Box className={generating ? 'generating-cover' : ''} sx={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid', borderColor: 'divider', boxShadow: '0 6px 18px rgba(133, 83, 0, 0.15)', bgcolor: '#0f172a', width: '220px', mx: 'auto' }}>
                  <BookCover title={title || '작품 제목'} author={author || '작가명'} imageUrl={coverImageUrl} height={300} />
                </Box>
              </Box>

              <Paper sx={{ p: 3, bgcolor: 'rgba(240, 243, 255, 0.6)', border: '1px solid', borderColor: 'divider', borderRadius: '12px' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary', mb: 1.5 }}>
                  AI 표지 생성 설정
                </Typography>
                
                {genError && <Alert severity="error" sx={{ mb: 2, py: 0.5, borderRadius: '8px', fontSize: '0.85rem' }}>{genError}</Alert>}
                {genSuccess && <Alert severity="success" sx={{ mb: 2, py: 0.5, borderRadius: '8px', fontSize: '0.85rem' }}>표지가 생성되어 로드되었습니다!</Alert>}

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="form-model-label" sx={{ color: 'text.secondary' }}>생성 모델</InputLabel>
                    <Select
                      labelId="form-model-label"
                      value={model}
                      label="생성 모델"
                      onChange={(e) => setModel(e.target.value)}
                      sx={{ borderRadius: '8px' }}
                    >
                      <MenuItem value="gpt-image-2">gpt-image-2 (선택 가능)</MenuItem>
                      <MenuItem value="gpt-image-1" disabled>gpt-image-1 (지원 종료)</MenuItem>
                      <MenuItem value="dall-e-3" disabled>DALL-E 3 (선택 불가)</MenuItem>
                      <MenuItem value="dall-e-2" disabled>DALL-E 2 (선택 불가)</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth size="small">
                    <InputLabel id="form-resolution-label" sx={{ color: 'text.secondary' }}>해상도 선택</InputLabel>
                    <Select
                      labelId="form-resolution-label"
                      value={resolution}
                      label="해상도 선택"
                      onChange={(e) => setResolution(e.target.value)}
                      sx={{ borderRadius: '8px' }}
                    >
                      <MenuItem value="960">960 (SD - 빠른 속도)</MenuItem>
                      <MenuItem value="1280">1280 (HD - 표준)</MenuItem>
                      <MenuItem value="1920">1920 (FHD - 고화질)</MenuItem>
                      <MenuItem value="2046">2046 (UHD - 초고화질)</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth size="small">
                    <InputLabel id="form-size-label" sx={{ color: 'text.secondary' }}>표지 비율</InputLabel>
                    <Select
                      labelId="form-size-label"
                      value={size}
                      label="표지 비율"
                      onChange={(e) => setSize(e.target.value)}
                      sx={{ borderRadius: '8px' }}
                    >
                      <MenuItem value="1024x1536">세로 표준형 (2:3 비율)</MenuItem>
                      <MenuItem value="1024x1024">정사각형 (1:1 비율)</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    label="OpenAI API Key"
                    type={apiKey ? "password" : "text"}
                    size="small"
                    fullWidth
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="sk-..."
                    InputProps={{ style: { borderRadius: '8px' } }}
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    startIcon={generating ? <CircularProgress size={16} color="inherit" /> : <AutoAwesomeIcon />}
                    disabled={generating}
                    onClick={handleGenerateCover}
                    sx={{ borderRadius: '8px' }}
                  >
                    {generating ? 'AI 표지 생성 중...' : 'AI 표지 생성'}
                  </Button>

                  {generating && (
                    <Box sx={{ width: '100%', mt: 1 }}>
                      <LinearProgress color="primary" sx={{ borderRadius: '4px', height: '6px' }} />
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center', mt: 0.5 }}>
                        AI가 이미지를 그리고 있습니다. 약 10~20초 소요됩니다...
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Paper>
            </Grid>

            {/* Bottom Actions */}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2, borderTop: '1px solid', borderColor: 'divider', pt: 3 }}>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<CancelIcon />}
                onClick={() => isEditMode ? onNavigate('detail', book.id) : onNavigate('home')}
                sx={{ borderRadius: '12px' }}
              >
                취소
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
                sx={{ borderRadius: '12px' }}
              >
                {isEditMode ? '수정 완료' : '등록 완료'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  )
}
