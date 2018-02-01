const fs = require('fs')

/** @function writeCsv
 * saves a javascript primitive to the filesystem
 * @param {string} filepath - file to save
 * @param {object[]} data - array of objects with key-value
 * @param {string} [delimiter] - default to ,
 * @returns {boolean||error}
 */
module.exports = function (filepath, data, delimiter = ',') {
  let wStream = fs.createWriteStream(filepath)
  let headers = Object.keys(data[0])
  wStream.write(headers.join(',') + '\n')
  data.forEach(function (row) {
    let rowText = ''
    headers.forEach(function (d, i) {
      if (typeof row[d] === 'string') {
        rowText += row[d].includes(',') ? `"${row[d]}"` : row[d]
      } else {
        rowText += row[d]
      }
      if (i < headers.length - 1) { rowText += delimiter }
    })
    rowText += '\n'
    wStream.write(rowText)
  })
  // close fileWriteStream
  wStream.end()
  console.log(`File saved as ${filepath}`)
  return true
}
