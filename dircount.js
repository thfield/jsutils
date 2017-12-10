'use strict'
const fs = require('fs')

let path = process.argv[2] || './'

try {
  let c = foldercountSync(path)
  logout(c, true)
} catch (error) {
  console.error(error.message)
}

/** @function foldercountSync
 * show subfolders with count of how many files are contained
 * @param {string} path
 * @returns {array[]}
 */
function foldercountSync (path) {
  path = path.endsWith('/') ? path : path + '/'

  let ignoredFiles = ['.DS_Store']
  let rfiles = []
  let rdirs = []
  // read directory
  let rootls = fs.readdirSync(path)
  // filter out ignored files
  rootls = rootls.filter(function (d) { return !ignoredFiles.includes(d) })
  // read each directory
  rootls.forEach(function (dir) {
    let s = fs.lstatSync(`${path}${dir}`)
    // if it's a file, push to the root-files array to be counted
    if (s.isFile()) { rfiles.push(dir) }
    // if it's a directory, count the files inside
    if (s.isDirectory()) {
      // read the directory
      let subfiles = fs.readdirSync(`${path}${dir}`)
      // filter ignored files
      subfiles = subfiles.filter(function (d) { return !ignoredFiles.includes(d) })
      // add the directory name and filecount to root-directories array
      rdirs.push([`${dir}/`, subfiles.length])
    }
  })
  // add the root-files
  rdirs.push(['./', rfiles.length])
  return rdirs
}

/** @function logout
 * pretty print an array and return an array of the strings
 * @param {array[]} arr - hopefully: ['string', integer]
 * @param {boolean} print - log out?
 * @returns {string[]}
 */
function logout (arr, print = false) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument 0 must be an array')
  }
  // find the longest character count
  let max = arr.reduce(function (prev, cur) {
    let c = cur.join('').length
    return prev > c ? prev : c
  }, 0)
  return arr.map(function (d) {
    let len = (d[0] + d[1]).length
    let pad = max - len
    let res = `${d[0]} ...${'.'.repeat(pad)} ${d[1]}`
    if (print) console.log(res)
    return res
  })
}
