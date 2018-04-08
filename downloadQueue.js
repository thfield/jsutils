'use strict'
const axios = require('axios')
// asynchrofy some promises, wrapped in a Promise.

/** @function downloadQueue
 * @param {object[]} arr - array of axios.request() config objects ex: {url: __, method: __, params: {}, id: __}
 * @param {integer} [maxDL=4] - maximum simultaneous downloads
 * @param {object} logger - error logger object
 * @returns {Promise}
 */
function downloadQueue (arr, maxDL = 4, logger) {
  let queue = []
  let current = 0
  let completed = 0
  let returnedData = []
  return new Promise(function (resolve, reject) {
    arr.forEach(makerequest)

    function makerequest (config) {
      if (current > maxDL) {
        queue.push(config)
      } else {
        if (logger) { logger.log(`${config.params.CurrentPageIndex}, creating get request`) }
        axios.request(config)
          .then(function (res) {
            returnedData.push(res.data)
          })
          .catch(function (e) {
            if (logger) {
              logger.error(e)
            } else {
              console.error(e)
            }
          })
          .then(whenDone)
        current += 1
      }
    }

    function whenDone () {
      current -= 1
      completed += 1
      if (queue.length > 0) {
        makerequest(queue.shift())
      } else {
        if (completed === arr.length) {
          if (logger) { logger.log(`${completed} downloads complete`) }
          resolve(returnedData)
        }
      }
    }
  })
}

module.exports = downloadQueue
