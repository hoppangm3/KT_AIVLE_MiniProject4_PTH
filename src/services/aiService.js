import { compressImage } from '../utils/imageUtils'

/**
 * Service to handle OpenAI Image Generation
 */
export const aiService = {
  /**
   * Generates a book cover image based on provided content
   */
  async generateBookCover(title, content, customPrompt, apiKey, options = {}) {
    if (!apiKey) throw new Error('OpenAI API Key가 필요합니다.')

    const { model = 'gpt-image-2', size = '1024x1536', resolution = '1280' } = options

    // Construct the prompt
    const finalPrompt = customPrompt?.trim()
      ? `${customPrompt.trim()} | Book title: "${title}". Book description: ${content}. Include the book title "${title}" as text on the cover.`
      : `Create a beautiful, abstract artistic book cover for a book titled "${title}". Book description: ${content}. Art style: professional digital art, high quality, oil paint details. Include the book title "${title}" as text on the cover.`

    // Map selected resolution to OpenAI API quality parameter
    let apiQuality = 'medium'
    if (resolution === '960') apiQuality = 'low'
    else if (resolution === '1280') apiQuality = 'medium'
    else if (resolution === '1920' || resolution === '2046') apiQuality = 'high'

    const requestBody = {
      model: model,
      prompt: finalPrompt,
      n: 1,
      size: size,
      quality: apiQuality,
      output_format: 'png'
    }

    let endpoint = 'https://api.openai.com/v1/images/generations'
    
    try {
      let res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey.trim()}`
        },
        body: JSON.stringify(requestBody)
      })

      let data
      if (!res.ok) {
        let errBody
        try { errBody = await res.json() } catch { errBody = await res.text() }
        const errMsg = errBody?.error?.message || String(errBody)

        // Retry with alternate endpoint if 405 occurs
        if (res.status === 405 || /Invalid method/i.test(errMsg)) {
          const altRes = await fetch('https://api.openai.com/v1/images/generate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey.trim()}`
            },
            body: JSON.stringify(requestBody)
          })
          if (!altRes.ok) throw new Error('AI 서비스 연결에 실패했습니다.')
          data = await altRes.json()
        } else {
          throw new Error(errMsg || 'OpenAI API 오류가 발생했습니다.')
        }
      } else {
        data = await res.json()
      }

      const b64Json = data.data?.[0]?.b64_json
      if (!b64Json) throw new Error('응답데이터에서 이미지 문자열을 찾을 수 없습니다.')

      // Convert and Compress
      const fullImageUrl = `data:image/png;base64,${b64Json}`
      return await compressImage(fullImageUrl)

    } catch (error) {
      console.error('AI Generation Error:', error)
      throw error
    }
  }
}
