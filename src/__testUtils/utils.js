function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = { calls: [] }
  mockFn.mockImplementation = newImpl => (impl = newImpl)
  return mockFn
}

function spyOn(obj, prop, impl = () => {}) {
  const originVal = obj[prop]
  obj[prop] = fn(impl)
  obj[prop].mockRestore = () => (obj[prop] = originVal)
}

module.exports = { fn, spyOn }
