'use strict'
// helper functions for working with arrays

/** @function sortNumberAsc
 * [].sort(sortNumberAsc) array sort ascending
 * @param a
 * @param b
 */
function sortNumberAsc (a, b) {
  return a - b
}

/** @function sortNumberDesc
 * [].sort(sortNumberDesc) array sort descending
 * @param a
 * @param b
 */
function sortNumberDesc (a, b) {
  return b - a
}

/** @function median
 * find the median value of an array of numbers
 * @param {number[]} arr
 * @returns {number}
 */
function median (arr) {
  arr.sort(sortNumberAsc)
  var half = Math.floor(arr.length / 2)
  if (arr.length % 2) { return arr[half] } else { return (arr[half - 1] + arr[half]) / 2.0 }
}

/** @function insertArrayAt
 * insert an array into another array at the specified index
 * @param {array} array
 * @param {integer} index
 * @param {array} arrayToInsert
 * @returns {array}
 */
function insertArrayAt (array, index, arrayToInsert) {
  let temp = array.slice(0)
  temp.splice(index, 0, arrayToInsert)
  return flatten(temp)
}

/** @function flatten
 * flatten([1,[2],3,4]) -> [1,2,3,4]
 * @param {array} arr
 * @returns {array}
 * https://github.com/Chalarangelo/30-seconds-of-code#flatten-array
 */
function flatten (arr) {
  return arr.reduce((a, v) => a.concat(v), [])
}

/** @function intersection
 * calculate the intersection of two or more arrays
 * @param {array} a
 * @param {array} b - one or more arrays
 * @returns {array}
 */
function intersection (a, ...b) {
  let arrays = [a]
  arrays.push(...b)
  var result = arrays.shift().filter(function (v) {
    return arrays.every(function (d) {
      return d.indexOf(v) !== -1
    })
  })
  return result
}

module.exports = { sortNumberAsc, sortNumberDesc, median, insertArrayAt, flatten, intersection }
