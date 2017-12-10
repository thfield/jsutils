const fs = require('fs')
const path = require('path')

/** @function write
 * saves a javascript primitive to the filesystem
 * @param {string} filename - file to save
 * @param {string} text - string of data (stringified if not already)
 * @returns {boolean||error}
 */
module.exports = function (filename, text) {
  if (!filename) { throw new Error('no filename specified') }
  if (!fs.statSync(path.dirname(filename))) {
    throw new Error('new directory does not exist')
  }
  if (!text) { throw new Error('no data to write') }
  if (typeof text !== 'string') text = JSON.stringify(text)
  fs.writeFile(filename, text,
    function (err) {
      if (err) { return err }
      console.log(`The file was written to ${filename}`)
      return true
    }
  )
}
