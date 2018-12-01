const thumbWar = require('../thumb-war')
const utils = require('../utils')

const originGetWinner = utils.getWinner
utils.getWinner = p1 => p1

test('bang should win', () => {
  const winner = thumbWar('Bang', 'Dan')
  expect(winner).toEqual('Bang')
  utils.getWinner = originGetWinner
})
