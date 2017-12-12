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
