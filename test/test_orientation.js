const orientation = require('../src/orientation')
const assert = require('assert')

describe('Orientation', function() {
  it('should give N for (0, 1)', function() {
    let compass = orientation.getCompass({x: 0, y: 1})

    assert.equal('N', compass)
  })
})