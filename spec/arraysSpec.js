const arrays = require('../arrays')

// { sortNumberAsc, sortNumberDesc, median, insertArrayAt }

describe ('sorting functions', function () {
  let ascending = [1, 2, 3]
  let descending = [3, 2, 1]

  describe ('arrays.sortNumberAsc', function () {
    let res = [3, 1, 2].sort(arrays.sortNumberAsc)
    it('sorts numbers ascending', function () {
      expect(res).toEqual(ascending)
    })
    it('does not sort numbers descending', function () {
      expect(res).not.toEqual(descending)
    })
  })

  describe ('arrays.sortNumberDesc', function () {
    let res = [3, 1, 2].sort(arrays.sortNumberDesc)

    it('sorts numbers descending', function () {
      expect(res).toEqual(descending)
    })
    it('does not sort numbers ascending', function () {
      expect(res).not.toEqual(ascending)
    })
  })
})

describe ('arrays.median', function () {
  describe ('sorted arrays', function () {
    it('finds the median for an array with an odd number', function () {
      let ex = [1, 3, 3, 6, 7, 8, 9]
      let res = arrays.median(ex)
      expect(res).toBe(6)
    })
    it('finds the median for an array with an even number', function () {
      let ex = [1, 2, 3, 4, 5, 6, 8, 9]
      let res = arrays.median(ex)
      expect(res).toBe(4.5)
    })
  })

  describe ('unsorted arrays', function () {
    it('finds the median for an array with an odd number', function () {
      let ex = [9, 3, 7, 1, 3, 8, 6]
      let res = arrays.median(ex)
      expect(res).toBe(6)
    })
    it('finds the median for an array with an even number', function () {
      let ex = [4, 6, 3, 9, 5, 2, 8, 1]
      let res = arrays.median(ex)
      expect(res).toBe(4.5)
    })
  })
})

describe ('insertArrayAt', function () {
  let letters = ['a', 'b']
  let numbers = [1, 2, 3]

  it ('inserts an array at the beginning of another', function () {
    let res = arrays.insertArrayAt(letters, 0, numbers)
    expect(res).toEqual([1, 2, 3, 'a', 'b'])
    expect(letters).toEqual(['a', 'b'])
    expect(numbers).toEqual([1, 2, 3])
  })

  it ('inserts an array at the end of another', function () {
    let res = arrays.insertArrayAt(letters, 2, numbers)
    expect(res).toEqual(['a', 'b', 1, 2, 3])
    expect(letters).toEqual(['a', 'b'])
    expect(numbers).toEqual([1, 2, 3])
  })

  it ('inserts an array in the middle of another', function () {
    let res = arrays.insertArrayAt(letters, 1, numbers)
    expect(res).toEqual(['a', 1, 2, 3, 'b'])
    expect(letters).toEqual(['a', 'b'])
    expect(numbers).toEqual([1, 2, 3])
  })
})

describe ('flatten', function () {
  let arr = [1, 2, 3, ['a', 'b']]

  it ('flattens an array', function () {
    let res = arrays.flatten(arr)
    expect(res).toEqual([1, 2, 3, 'a', 'b'])
    expect(arr).toEqual([1, 2, 3, ['a', 'b']])
  })
})

describe ('intersection', function () {
  it ('works with arrays of numbers', function () {
    let a = [1, 2, 3]
    let b = [3, 4, 5]
    let res = arrays.intersection(a, b)
    expect(res).toEqual([3])
  })

  it ('works with arrays of strings', function () {
    let a = ['a', 'b', 'c']
    let b = ['c', 'd', 'e']
    let res = arrays.intersection(a, b)
    expect(res).toEqual(['c'])
  })

  it ('works with three arrays', function () {
    let a = [1, 2, 3]
    let b = [3, 4, 5]
    let c = [3, 5, 7]
    let res = arrays.intersection(a, b, c)
    expect(res).toEqual([3])
  })
})
