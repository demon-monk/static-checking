const thumbWar = require('../thumb-war')
const utilsMock = require('../utils')

jest.mock('../utils.js', () => {
  return {
    getWinner: jest.fn(p1 => p1),
  }
})

test('returns winner', () => {
  const winner = thumbWar('Bang', 'Dan')
  expect(winner).toEqual('Bang')
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ['Bang', 'Dan'],
    ['Bang', 'Dan'],
  ])
  utilsMock.getWinner.mockReset()
})
