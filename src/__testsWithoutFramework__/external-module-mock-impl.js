require('../__mocksWithoutFramework__/utils')
const utilsPath = require.resolve('../utils.js')
const utilsMockPath = require.resolve('../__mocksWithoutFramework__/utils.js')
require.cache[utilsPath] = require.cache[utilsMockPath]

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const winner = thumbWar('Bang', 'Dan')
assert.strictEqual(winner, 'Bang')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Bang', 'Dan'],
  ['Bang', 'Dan'],
])
delete require.cache[utilsPath]
