'use strict'
const d3 = require('d3')

/** @function objArrayToSortedNumArray
 * given an array of objects, return an array that is just the values of property "key"
 * @param {object[]} objArray
 * @param {string} key - property of object in objArray to find, value pair assumed to be type number
 * @returns {array}
 * @example
 *  // returns [1,2]
 * objArrayToSortedNumArray([{id:2, name:"foo"}, {id:1, name:"bar"}], 'id');
 */
function objArrayToSortedNumArray (objArray, key) {
  return objArray.map(function (el) { return el[key] }).sort(function (a, b) { return a - b })
}

/** @function minValueInObjectDict
 * get minimum value of dictionary object
 * @param {object} obj - dictionary object
 * @returns {number} minimum value
 * @example
 *   // returns 1
 * minValueInObjectDict({a:1, b:100, c:10});
 */
function minValueInObjectDict (obj) {
  var result = Object.keys(obj).reduce(function (a, b) { return obj[a] < obj[b] ? a : b })
  return obj[result]
}

/** @function maxValueInObjectDict
 * get maximum value of dictionary object
 * @param {object} obj - dictionary object
 * @returns {number} maximum value
 * @example
 *   // returns 100
 * maxValueInObjectDict({a:1, b:100, c:10})
 */
function maxValueInObjectDict (obj) {
  var result = Object.keys(obj).reduce(function (a, b) { return +obj[a] > +obj[b] ? a : b })
  return obj[result]
}

/** @function arrayQuartiles
 * find the quartiles of a sorted array of numbers
 * @param {number[]} sortedArr
 * @returns {array}
 */
function arrayQuartiles (sortedArr) {
  return [
    d3.quantile(sortedArr, 0.25),
    d3.quantile(sortedArr, 0.5),
    d3.quantile(sortedArr, 0.75)
  ]
}

module.exports = {
  objArrayToSortedNumArray,
  minValueInObjectDict,
  maxValueInObjectDict,
  arrayQuartiles
}
