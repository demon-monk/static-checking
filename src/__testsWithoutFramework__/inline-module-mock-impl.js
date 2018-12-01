// use node src/__tests__/inline-module-mock-impl.js to test this file instead of yarn test
// because jest will control the module system and require.cache operation will not effect
const { fn } = require('../__testUtils/utils')
const utilsPath = require.resolve('../utils')
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    getWinner: fn(p1 => p1),
  },
}
const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Kent C. Dodds', 'Ken Wheeler'],
  ['Kent C. Dodds', 'Ken Wheeler'],
])

// cleanup
delete require.cache[utilsPath]
