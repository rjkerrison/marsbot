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

  it('should obey maxNorth limit for grid', function() {
    const scenario = new Scenario({maxNorth: 5})

    scenario.addGridLine('3 10')

    assert.deepEqual(new Grid(3, 5), scenario.grid)
  })

  it('should obey maxEast limit', function() {
    const scenario = new Scenario({maxEast: 7})

    scenario.addGridLine('10 10')

    assert.deepEqual(new Grid(7, 10), scenario.grid)
  })

  it('should start robots on the grid', function() {
    const scenario = new Scenario()

    scenario.addGridLine('10 10')
    scenario.addRobotLines('12 12 E', '')
    const output = scenario.execute()

    assert.deepEqual('10 10 E', output[0])
  })
})