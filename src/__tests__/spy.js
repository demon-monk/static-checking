const utils = require('../utils')
const thumbWar = require('../thumb-war')
const { spyOn } = require('../__testUtils/utils')

test('return winner', () => {
  jest.spyOn(utils, 'getWinner')
  utils.getWinner.mockImplementation(p1 => p1)
  const winner = thumbWar('Bang', 'Dan')
  expect(winner).toEqual('Bang')
  utils.getWinner.mockRestore()
})

test('return winner', () => {
  spyOn(utils, 'getWinner', p1 => p1)
  //   utils.getWinner.mockImplementation(p1 => p1)
  const winner = thumbWar('Bang', 'Dan')
  expect(winner).toEqual('Bang')
  utils.getWinner.mockRestore()
})
