'use strict'

/** @function prettyPrint
 * pretty print an array and return an array of the strings
 * @param {array[]} arr - something like: [['string', int], ['string', int]]
 * @param {boolean} print - log out to console?
 * @returns {string[]}
 */
function prettyPrint (arr, print = false) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument 0 must be an array')
  }
  // find the longest character count
  let max = arr.reduce(function (prev, cur) {
    let c = cur.join('').length
    return prev > c ? prev : c
  }, 0)

  return arr.map(function (d) {
    let len = (d[0].toString().concat(d[1].toString())).length
    let pad = max - len
    let res = `${d[0]} ...${'.'.repeat(pad)} ${d[1]}`
    if (print) console.log(res)
    return res
  })
}

module.exports = prettyPrint
