'use strict'
// helper functions for working with strings

/** @function singluarize
 * @param {string} str
 * @returns {string} str without 's' at the end
 */
function singluarize (str) {
  return str.replace(/s$/, '')
}

/** @function toTitleCase
 * TITLE cASE a String => Title Case A String
 * @param {string} str
 * @returns {string}
 */
function toTitleCase (str) {
  return str.replace(/([^\W_]+[^\s-]*) */g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() })
}

module.exports = { singluarize, toTitleCase }
