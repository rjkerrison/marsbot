const orientation = require('../src/orientation')
const assert = require('assert')

describe('Orientation', function() {
  it('should give N for (0, 1)', function() {
    let compass = orientation.getCompass({x: 0, y: 1})

    assert.equal('N', compass)
  })

  it('should give W for (-1, 0)', function() {
    let compass = orientation.getCompass({x: -1, y: 0})

    assert.equal('W', compass)
  })

  it('should give west for anticlockwise north', function() {
    let result = orientation.anticlockwise({x: 0, y: 1})

    assert.deepEqual({x: -1, y: 0}, result)
  })

  it('should give east for clockwise north', function() {
    let result = orientation.clockwise({x: 0, y: 1})
    let compass = orientation.getCompass(result)

    assert.deepEqual('E', compass)
  })
})