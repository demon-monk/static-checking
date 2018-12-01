const assert = require('assert')
const { fn } = require('../__testUtils/utils')
const utils = require('../utils')
const thumbWar = require('../thumb-war')

const originGetWinner = utils.getWinner
utils.getWinner = fn(p1 => p1)
it('returns winner', () => {
  const winner = thumbWar('Bang', 'Dan')
  assert.strictEqual(winner, 'Bang')
  assert.deepStrictEqual(utils.getWinner.mock.calls, [
    ['Bang', 'Dan'],
    ['Bang', 'Dan'],
  ])
  utils.getWinner = originGetWinner
})
