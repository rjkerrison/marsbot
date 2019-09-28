const Robot = require('../src/robot.js')
const assert = require('assert')

describe('Robot', function() {
  describe('?', function () {
    it('should pass the sample data', function () {
      const robots = [
        {robot: makeRobot(1, 1, 'E'), instructions: 'RFRFRFRF'},
        {robot: makeRobot(3, 2, 'N'), instructions: 'FRRFLLFFRRFLL'},
        {robot: makeRobot(0, 3, 'W'), instructions: 'LLFFFLFLFL'}
      ]

      robots.forEach(function({robot, instructions}) {
        robot.move_all(instructions)
      })

      assert.ok(!robots[0].robot.isLost, '1st Robot lost')
      assert.equal(1, robots[0].robot.x, '1st Robot x')
      assert.equal(1, robots[0].robot.y, '1st Robot y')
      assert.deepEqual(orientations['E'], robots[0].robot.o, '1st Robot orientation')

      assert.ok(robots[1].robot.isLost, '2nd Robot lost')
      assert.equal(3, robots[1].robot.x, '2nd Robot x')
      assert.equal(3, robots[1].robot.y, '2nd Robot y')
      assert.deepEqual(orientations['N'], robots[1].robot.o, '2nd Robot orientation')

      assert.ok(!robots[2].robot.isLost, '3rd Robot lost')
      assert.equal(2, robots[2].robot.x, '3rd Robot x')
      assert.equal(3, robots[2].robot.y, '3rd Robot y')
      assert.deepEqual(orientations['S'], robots[2].robot.o, '3rd Robot orientation')
    })

    it('should pass simple forward case', function () {
      const robot = makeRobot(1, 1, 'N')

      robot.move('F')

      assert.equal(0, robot.o.x)
      assert.equal(1, robot.o.y)
      assert.equal(1, robot.x)
      assert.equal(2, robot.y)
    })

    it('should stay still when no moves given', function () {
      const robot = makeRobot(1, 1, 'N')

      assert.equal(0, robot.o.x)
      assert.equal(1, robot.o.y)
      assert.equal(1, robot.x)
      assert.equal(1, robot.y)
    })
  })
})

function makeRobot(x, y, p) {
  const o = orientations[p]
  return new Robot(x, y, {...o})
}

const orientations = {
  'N': {x: 0, y: 1},
  'E': {x: 1, y: 0},
  'S': {x: 0, y: -1},
  'W': {x: -1, y: 0}
}
