const arrayToCsvString = require('../array-to-csv')

let testArr = [
  {a: 1, b: 2, c: 3},
  {a: 4, b: 5, c: 6},
  {a: 7, b: 8, c: 9}
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
})
