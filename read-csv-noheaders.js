'use strict'
const fs = require('fs')
const d3 = require('dv-dsv')

/** @function readCsvNoHeader
 * read a csv file that doesn't contain a header row and parse it into a js object
 * @param {string} path - path to file to read
 * @param {string[]} headers - array of headers in same order as file
 */
module.exports = function (path, headers) {
  return d3.csvParseRows(fs.readFileSync(path, 'utf8'), function (row) {
    return kv(headers, row)
  })
}

function kv (header, data) {
  let res = {}
  header.forEach(function (el, i) {
    res[el] = data[i]
  })
  return res
}
