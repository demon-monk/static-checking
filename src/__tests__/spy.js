const utils = require('../utils')
const thumbWar = require('../thumb-war')

test('return winner', () => {
  jest.spyOn(utils, 'getWinner')
  utils.getWinner.mockImplementation(p1 => p1)
  const winner = thumbWar('Bang', 'Dan')
  expect(winner).toEqual('Bang')
  utils.getWinner.mockRestore()
})
