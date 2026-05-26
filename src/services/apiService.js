import { API_BASE_URL } from '../config'

/**
 * Service to handle all Book-related API calls (CRUD)
 */
export const apiService = {
  // 1. Get all books
  async getAllBooks() {
    const res = await fetch(API_BASE_URL)
    if (!res.ok) throw new Error('도서 목록을 가져오는 데 실패했습니다.')
    return await res.json()
  },

  // 2. Get a single book by ID
  async getBookById(id) {
    const res = await fetch(`${API_BASE_URL}/${id}`)
    if (!res.ok) throw new Error('도서 정보를 가져오는 데 실패했습니다.')
    return await res.json()
  },

  // 3. Create a new book (POST)
  async createBook(payload) {
    const res = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (!res.ok) throw new Error('도서 등록에 실패했습니다.')
    return await res.json()
  },

  // 4. Update an existing book (PATCH)
  async updateBook(id, payload) {
    const res = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (!res.ok) throw new Error('도서 정보 수정에 실패했습니다.')
    return await res.json()
  },

  // 5. Delete a book (DELETE)
  async deleteBook(id) {
    const res = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE'
    })
    if (!res.ok) throw new Error('도서 삭제에 실패했습니다.')
    return true
  }
}
