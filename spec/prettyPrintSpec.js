const prettyPrint = require('../prettyPrint')

let testArr = [
  ['a', 1]
]
let testArr2 = ['b', 2]
let testArr3 = ['cc', 33]
let testArr4 = ['ddd', 444]
let testArr5 = ['e', 55555]
let testArr6 = ['ff', 6]
let testArr7 = [7, 'gg']
let testArr8 = ['h', '8h']
let testArr9 = [9, 9]

describe ('prettyPrint ', function () {

  describe ('one', function () {
    let expected = [
      'a ... 1'
    ]
    let res = prettyPrint(testArr)
    it('works for a string and int with length one', function () {
      expect(res).toEqual(expected)
    })
  })

  describe ('two', function () {
    testArr.push(testArr2)
    let expected = [
      'a ... 1',
      'b ... 2'
    ]
    let res = prettyPrint(testArr)
    it('works for two strings and ints each with length one', function () {
      expect(res).toEqual(expected)
    })
  })

  describe ('three', function () {
    testArr.push(testArr3)
    let expected = [
      'a ..... 1',
      'b ..... 2',
      'cc ... 33'
    ]
    let res = prettyPrint(testArr)
    it('works for three strings with different lengths', function () {
      expect(res).toEqual(expected)
    })
  })

  describe ('four', function () {
    testArr.push(testArr4)
    let expected = [
      'a ....... 1',
      'b ....... 2',
      'cc ..... 33',
      'ddd ... 444'
    ]
    let res = prettyPrint(testArr)
    it('works for four strings with different lengths', function () {
      expect(res).toEqual(expected)
    })
  })

  describe ('5', function () {
    testArr.push(testArr5)
    let expected = [
      'a ....... 1',
      'b ....... 2',
      'cc ..... 33',
      'ddd ... 444',
      'e ... 55555'
    ]
    let res = prettyPrint(testArr)
    it('works for five strings with different lengths', function () {
      expect(res).toEqual(expected)
    })
  })

  describe ('6', function () {
    testArr.push(testArr6)
    let expected = [
      'a ....... 1',
      'b ....... 2',
      'cc ..... 33',
      'ddd ... 444',
      'e ... 55555',
      'ff ...... 6'
    ]
    let res = prettyPrint(testArr)
    it('works for six strings with different lengths', function () {
      expect(res).toEqual(expected)
    })
  })

  describe ('7', function () {
    testArr.push(testArr7)
    let expected = [
      'a ....... 1',
      'b ....... 2',
      'cc ..... 33',
      'ddd ... 444',
      'e ... 55555',
      'ff ...... 6',
      '7 ...... gg'
    ]
    let res = prettyPrint(testArr)
    it('works with int/string pairs', function () {
      expect(res).toEqual(expected)
    })
  })

  describe ('8', function () {
    testArr.push(testArr8)
    let expected = [
      'a ....... 1',
      'b ....... 2',
      'cc ..... 33',
      'ddd ... 444',
      'e ... 55555',
      'ff ...... 6',
      '7 ...... gg',
      'h ...... 8h'
    ]
    let res = prettyPrint(testArr)
    it('works with string/string pairs', function () {
      expect(res).toEqual(expected)
    })
  })

  describe ('9', function () {
    testArr.push(testArr9)
    let expected = [
      'a ....... 1',
      'b ....... 2',
      'cc ..... 33',
      'ddd ... 444',
      'e ... 55555',
      'ff ...... 6',
      '7 ...... gg',
      'h ...... 8h',
      '9 ....... 9'
    ]
    let res = prettyPrint(testArr)
    it('works with int/int pairs', function () {
      expect(res).toEqual(expected)
    })
  })
})
