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
  // http://stackoverflow.com/questions/1348178/a-better-way-to-splice-an-array-into-an-array-in-javascript
  Array.prototype.splice.apply(array, [index, 0].concat(arrayToInsert))
}

module.exports = { sortNumberAsc, sortNumberDesc, median, insertArrayAt }
