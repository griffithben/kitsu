import Kitsu from 'kitsu'

describe('isAuth', () => {
  it('should return false if Authorization header not set', () => {
    expect.assertions(1)
    const api = new Kitsu()
    expect(api.isAuth).toBe(false)
  })

  it('should return true if Authorization header is set in constructor', () => {
    expect.assertions(1)
    const api = new Kitsu({
      headers: {
        Authorization: 'value'
      }
    })
    expect(api.isAuth).toBe(true)
  })

  it('should return true if Authorization header is set by method', () => {
    expect.assertions(1)
    const api = new Kitsu()
    api.headers['Authorization'] = 'value'
    expect(api.isAuth).toBe(true)
  })
})
