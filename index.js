/**
 * Dependencies
 */

const list = require('./list.json')

/**
 * Return diceware word.
 *
 * @param {Number} nb
 * @param {Object} words
 * @api public
 */

module.exports = (nb, words = list) => list[nb]
