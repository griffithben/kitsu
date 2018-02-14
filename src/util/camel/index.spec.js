import camel from './'

describe('camel', () => {
  it('should camelCase a kebab-case string', () => {
    expect.assertions(1)
    expect(camel('long-word')).toBe('longWord')
  })

  it('should camelCase a camelCase string', () => {
    expect.assertions(1)
    expect(camel('longWord')).toBe('longWord')
  })

  it('should camelCase a snake_case string', () => {
    expect.assertions(1)
    expect(camel('long_word')).toBe('longWord')
  })
})
