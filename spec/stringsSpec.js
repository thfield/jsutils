const strings = require('../strings')

describe ('strings.titleCase ', function () {
  let expected = 'Lorem Ipsum'

  it('properly changes all lowercase', function () {
    let res = strings.toTitleCase('lorem ipsum')
    expect(res).toEqual(expected)
  })

  it('properly changes all uppercase', function () {
    let res = strings.toTitleCase('LOREM IPSUM')
    expect(res).toEqual(expected)
  })

  it('properly handles already titlecased strings', function () {
    let res = strings.toTitleCase('Lorem Ipsum')
    expect(res).toEqual(expected)
  })

  it('properly handles inverted titlecased', function () {
    let res = strings.toTitleCase('lOREM iPSUM')
    expect(res).toEqual(expected)
  })
})

describe ('strings.singluarize', function () {
  it ('takes the s off a string', function () {
    let res = strings.singluarize('baboons')
    expect(res).toBe('baboon')
  })
})
