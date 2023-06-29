import request from 'supertest'
import app from '../app'

describe('User routes GET / ', () => {
  it('should return "Hello World!"', async () => {
    const response = await request(app).get('/users')

    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello World!')
  })
})
