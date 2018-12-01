const thumbWar = require('../thumb-war')
const utils = require('../utils')

const originGetWinner = utils.getWinner
utils.getWinner = jest.fn(p1 => p1)

test('bang should win', () => {
  const winner = thumbWar('Bang', 'Dan')
  expect(winner).toEqual('Bang')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'Bang', 'Dan')
  expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'Bang', 'Dan')
  console.log(utils.getWinner)
  utils.getWinner = originGetWinner
})
