'use strict'
// TODO: turn this into writable stream?

/** @function arrayToCsvString
 * turn an array of objects into a csv string, row separated by '\n'
 * @param {object[]} arr - data
 * @param {string[]} [headers] - header row
 * @returns {string}
 */
function arrayToCsvString (arr, headers) {
  // use keys of first object if no headers object
  headers = headers || Object.keys(arr[0])

  return arr.map(function (el) {
    return makeRow(el, headers)
  }).join('\n')

  function makeRow (obj, props) {
    let res = props.map(function (p) {
      return obj[p]
    })
    return res.join(',')
  }
}

module.exports = arrayToCsvString

/**  examples:

let arr = [
  {a: 1, b: 2, c: 3},
  {a: 4, b: 5, c: 6},
  {a: 7, b: 8, c: 9}
]

let one = arrayToCsvString(arr)
  // => '1,2,3\n4,5,6\n7,8,9'

let headerRowReverse = ['c', 'b', 'a']
let two = arrayToCsvString(arr, headerRowReverse)
  // => '3,2,1\n6,5,4\n9,8,7'

let headerRowShort = ['a', 'b']
let three = arrayToCsvString(arr, headerRowShort)
  // => '1,2\n4,5\n7,8'

let headerRowUndefined = ['a', 'z', 'b']
let four = arrayToCsvString(arr, headerRowUndefined)
  // => '1,,2\n4,,5\n7,,8'

console.log(one)
console.log(two)
console.log(three)
console.log(four)
// */
