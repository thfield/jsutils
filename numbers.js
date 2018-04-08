'use strict'
// helper functions for working with numbers

/** @function numberWithCommas
 * add 1000s-place commas to a number
 * @param {number} x
 * @returns {string}
 */
function numberWithCommas (x) {
  var parts = x.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

/** @function round
 * round a number to the specified *th place (default 10)
 * @param {number} num
 * @param {integer} [place] - place to round
 * @returns {number}
 */
function round (num, place = 10) {
  return Math.round(place * num) / place
}

/** @function roundWhole
 * round a number to the specified *th place (default 10)
 * @param {number} num
 * @param {integer} [place] - place to round
 * @returns {number}
 */
function roundWhole (num, place = 10) {
  num = num / place
  num = Math.round(num)
  return num * place
}

module.exports = { numberWithCommas, round, roundWhole }
