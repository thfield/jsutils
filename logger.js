'use strict'
const fs = require('fs')
const path = require('path')
const os = require('os')
const logsPath = path.join('./', 'logs')
/*
  until i learn [winston](https://github.com/winstonjs/winston)
  https://www.loggly.com/ultimate-guide/node-logging-basics/
  https://blog.risingstack.com/node-js-logging-tutorial/
  or maybe roarr:
  https://medium.freecodecamp.org/roarr-the-perfect-json-logger-node-js-and-browser-935180bda529
*/
function createLogger (name) {
  makeDirIfNotExist(logsPath)
  let logger = {}
  let today = new Date()
  let file = path.join(logsPath, `${today.toISOString().slice(0, 10)}.log`)
  logger.stream = fs.createWriteStream(file, {flags: 'a'})
  logger.stream.write(`${os.EOL}${name} logger created${os.EOL}`)
  logger.stream.write(`${getNow()}${os.EOL}`)
  logger.log = function (data) {
    let now = getNow()
    if (Array.isArray(data)) {
      data = data.join(os.EOL)
    }
    this.stream.write(`${now}, ${data}${os.EOL}`)
  }
  logger.error = function (data) {
    let now = getNow()
    if (Array.isArray(data)) {
      data = data.join(os.EOL)
    }
    this.stream.write(`ERROR ${now}, ${data}${os.EOL}`)
  }
  logger.end = function () {
    this.stream.write(`${name} logger closed${os.EOL}`)
    this.stream.end()
  }
  return logger
}

function makeDirIfNotExist (path) {
  try {
    fs.mkdirSync(path)
    return true
  } catch (error) {
    if (error.code === 'EEXIST') {
      return false
    }
  }
}

function getNow () {
  return new Date().toISOString().slice(11)
}

// let foo = createLogger()
//
// try {
//   foo.log('lorem ipsum')
//   foo.log('etaoin shrdlu')
//   foo.log('fizz buzz')
// } catch (err) {
//   console.error(err)
// }
//
// foo.end()

module.exports = createLogger
