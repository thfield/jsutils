const numbers = require('../numbers')

describe ('numberWithCommas', function () {
  it ('properly works with hundred', function () {
    let res = numbers.numberWithCommas(123)
    expect(res).toBe('123')
  })

  it ('properly works with a thousand', function () {
    let res = numbers.numberWithCommas(1234)
    expect(res).toBe('1,234')
  })

  it ('properly works with a thousand and decimals', function () {
    let res = numbers.numberWithCommas(1234.56)
    expect(res).toBe('1,234.56')
  })

  it ('properly works with a ten thousands', function () {
    let res = numbers.numberWithCommas(12345)
    expect(res).toBe('12,345')
  })

  it ('properly works with a hundred thousands', function () {
    let res = numbers.numberWithCommas(123456)
    expect(res).toBe('123,456')
  })
})

describe('round', function () {
  it ('rounds up to tenths without a param', function () {
    let res = numbers.round(0.125)
    expect(res).toBe(0.1)
  })

  it ('rounds down to tenths without a param', function () {
    let res = numbers.round(0.15)
    expect(res).toBe(0.2)
  })

  it ('rounds up to hundredths', function () {
    let res = numbers.round(0.129, 100)
    expect(res).toBe(0.13)
  })

  it ('rounds down to hundredths', function () {
    let res = numbers.round(0.134, 100)
    expect(res).toBe(0.13)
  })

  it ('rounds to thousandths', function () {
    let res = numbers.round(0.12345, 1000)
    expect(res).toBe(0.123)
  })
})
