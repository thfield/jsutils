'use strict'
const fs = require('fs')

let path = process.argv[2] || './'

try {
  let c = foldercountSync(path)
  logout(c, true)
  // console.log(logout(c))
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
  let rootls = fs.readdirSync(path)
  rootls = rootls.filter(function (d) { return !ignoredFiles.includes(d) })
  rootls.forEach(function (dir) {
    let s = fs.lstatSync(`${path}${dir}`)
    if (s.isFile()) { rfiles.push(dir) }
    if (s.isDirectory()) {
      let subfiles = fs.readdirSync(`${path}${dir}`)
      subfiles = subfiles.filter(function (d) { return !ignoredFiles.includes(d) })
      rdirs.push([`${dir}/`, subfiles.length])
    }
  })
  rdirs.push(['./', rfiles.length])
  return rdirs
}

/** @function logout
 * pretty print an array and return an array of the strings
 * @param {array[]} arr - ['string', integer]
 * @param {boolean} print - log out?
 * @returns {string[]}
 */
function logout (arr, print) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument 0 must be an array')
  }
  let max = arr.reduce(function (prev, cur) {
    let c = cur[0].length + cur[1].toString().length
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
