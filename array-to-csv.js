'use strict'
// TODO: turn this into writable stream?

/** @function arrayToCsvString
 * turn an array of objects into a csv string, row separated by '\n'
 * @param {object[]} arr - data
 * @param {string[]} [headers] - header row
 * @param {boolean} [showHeaders=false] - include header row in result?
 * @returns {string}
 */
function arrayToCsvString (arr, headers, showHeaders) {
  // use keys of first object if no headers object
  headers = headers || Object.keys(arr[0])

  let res = arr.map(function (el) {
    return makeRow(el, headers)
  })

  if (showHeaders) {
    res.unshift(headers)
  }

  return res.join('\n')

  function makeRow (obj, props) {
    let res = props.map(function (p) {
      return obj[p]
    })
    return res.join(',')
  }
}

module.exports = arrayToCsvString
