const Scenario = require('../src/scenario')
const Grid = require('../src/grid')
const assert = require('assert')

describe('Scenario', function() {
  it('should accept grid', function() {
    const scenario = new Scenario()

    scenario.addGridLine('5 3')

    assert.deepEqual(new Grid(5, 3), scenario.grid)
  })
})