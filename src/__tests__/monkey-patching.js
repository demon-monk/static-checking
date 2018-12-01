const thumbWar = require('../thumb-war')
// const utils = require('../utils')
test('bang should win', () => {
  const winner = thumbWar('Bang', 'Dan')
  expect(winner).toEqual('Bang')
})
