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

  let res = arr.map(function (row) {
    return makeRow(row, headers)
  })

  if (showHeaders) {
    res.unshift(headers)
  }

  return res.join('\n')

  function makeRow (row, headers) {
    let res = headers.map(function (p) {
      row[p] = row[p] || ''
      if (typeof row[p] !== 'string') { row[p] = row[p].toString() }
      let smplfd = row[p].includes(',') ? `"${row[p]}"` : row[p]
      smplfd = smplfd.replace(/\n/g, '').replace(/\r/g, '')
      return smplfd
    })
    return res.join(',')
  }
}

module.exports = arrayToCsvString
