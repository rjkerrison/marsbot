const Scenario = require('../src/scenario')
const Grid = require('../src/grid')
const assert = require('assert')

describe('Scenario', function() {
  it('should accept grid', function() {
    const scenario = new Scenario()

    scenario.addGridLine('5 3')

    assert.deepEqual(new Grid(5, 3), scenario.grid)
  })

  it('should move a robot', function() {
    const scenario = new Scenario()

    scenario.addGridLine('5 3')
    scenario.addRobotLines('1 1 E', 'FRF')
    const output = scenario.execute()

    assert.deepEqual('2 0 S', output[0])
  })

  it('should move two robots', function() {
    const scenario = new Scenario()

    scenario.addGridLine('5 3')
    scenario.addRobotLines('1 1 E', 'F')
    scenario.addRobotLines('1 1 E', 'LF')
    const output = scenario.execute()

    assert.deepEqual('2 1 E', output[0])
    assert.deepEqual('1 2 N', output[1])
  })
})