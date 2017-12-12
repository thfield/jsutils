const dataStructures = require('../dataStructures')

describe ('objArrayToSortedNumArray', function () {
  let t = [{id:2, name:"foo"}, {id:1, name:"bar"}]
  let res = dataStructures.objArrayToSortedNumArray(t, 'id')
  it('returns', function () {
    expect(res).toEqual([1, 2])
  })
})

describe ('minValueInObjectDict', function () {
  let t = {a:1, b:100, c:10}
  let res = dataStructures.minValueInObjectDict(t)
  it('returns', function () {
    expect(res).toEqual(1)
  })
})

describe ('maxValueInObjectDict', function () {
  let t = {a:1, b:100, c:10}
  let res = dataStructures.maxValueInObjectDict(t)
  it('returns', function () {
    expect(res).toEqual(100)
  })
})
