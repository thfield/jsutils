const arrayToCsvString = require('../array-to-csv')

let testArr = [
  {a: 1, b: 2, c: 3},
  {a: 4, b: 5, c: 6},
  {a: 7, b: 8, c: 9}
]

let testArrComma = [
  {a: 1, b: 2, c: 3},
  {a: 'a', b: 'b,withcomma', c: 'c,has,several,commas'},
  {a: 7, b: 8, c: '9'}
]

let testArrNewLines = [
  {a: 1, b: 2, c: 3},
  {a: 'a', b: 'b\nwithnewline', c: 'c\n\nwithtwonewlines'},
  {a: 7, b: 8, c: 'c\r\nwithwindowslineendings'}
]

describe ('arrayToCsvString', function () {
  it('works with no header row', function () {
    let res = arrayToCsvString(testArr)
    expect(res).toEqual('1,2,3\n4,5,6\n7,8,9')
  })

  it('returns a header row when asked', function () {
    let headerRow = ['a', 'b', 'c']
    let res = arrayToCsvString(testArr, headerRow, true)
    expect(res).toEqual('a,b,c\n1,2,3\n4,5,6\n7,8,9')
  })

  it('works with a reverse header row', function () {
    let headerRowReverse = ['c', 'b', 'a']
    let res = arrayToCsvString(testArr, headerRowReverse)
    expect(res).toEqual('3,2,1\n6,5,4\n9,8,7')
  })

  it('works with a short header row', function () {
    let headerRowShort = ['a', 'b']
    let res = arrayToCsvString(testArr, headerRowShort)
    expect(res).toEqual('1,2\n4,5\n7,8')
  })

  it('works with a header row containing a non present-property', function () {
    let headerRowUndefined = ['a', 'z', 'b']
    let res = arrayToCsvString(testArr, headerRowUndefined)
    expect(res).toEqual('1,,2\n4,,5\n7,,8')
  })

  it('works with values that are only in one row', function () {
    testArr.push({a: 10, b: 11, c: 12, d: 13})
    let headerRowLast = ['a', 'b', 'c', 'd']
    let res = arrayToCsvString(testArr, headerRowLast)
    expect(res).toEqual('1,2,3,\n4,5,6,\n7,8,9,\n10,11,12,13')
  })

  it('works with values that have commas', function () {
    let res = arrayToCsvString(testArrComma)
    expect(res).toEqual('1,2,3\na,"b,withcomma","c,has,several,commas"\n7,8,9')
  })

  it('works with values that have newlines', function () {
    let res = arrayToCsvString(testArrNewLines)
    expect(res).toEqual('1,2,3\na,bwithnewline,cwithtwonewlines\n7,8,cwithwindowslineendings')
  })
})
