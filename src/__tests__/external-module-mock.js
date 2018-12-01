const thumbWar = require('../thumb-war')
const utils = require('../utils')

jest.mock('../utils.js')

test('returns winner', () => {
  const winner = thumbWar('Bang', 'Dan')
  expect(winner).toEqual('Bang')
  expect(utils.getWinner.mock.calls).toEqual([['Bang', 'Dan'], ['Bang', 'Dan']])
  utils.getWinner.mockReset()
})
