'use strict'
const fs = require('fs')
const prettyPrint = require('./prettyPrint')
// TODO: add option to sortBy alpha or numFiles
let path = process.argv[2] || process.cwd()

try {
  let c = foldercountSync(path)
  prettyPrint(c, true)
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
