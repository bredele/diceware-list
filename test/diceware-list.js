/**
 * Dependencies
 */

const test = require('tape')
const word = require('..')
const words = require('../list.json')


test('should return first word', assert => {
  assert.plan(1)
  assert.equal(word(11111), 'abacus')
})

test('should return random word #1', assert => {
  assert.plan(1)
  assert.equal(word(11126), 'abreast')
})


test('should return random word #2', assert => {
  assert.plan(1)
  assert.equal(word(11536), 'ammonia')
})

test('should return last word', assert => {
  assert.plan(1)
  assert.equal(word(66666), 'zoom')
})
