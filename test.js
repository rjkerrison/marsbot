const Robot = require('./robot.js')

const robots = [
  [1, 1, 'E', 'RFRFRFRF'],
  [3, 2, 'N', 'FRRFLLFFRRFLL', true],
  [0, 3, 'W', 'LLFFFLFLFL'],
  [0, 0, 'E', 'FFFFLFF']
]

class TestCase {
  constructor(x, y, p, moves) {
    Object.assign(this, {x, y, p, moves})
  }

  execute() {
    const o = orientations[this.p]
    const robot = new Robot(this.x, this.y, o)
    robot.move_all(this.moves)
    console.log(robot)
  }

  assert(x, y, isLost) {
    assert(this.robot.x, x)
    assert(this.robot.y, y)
    assert(this.robot.isLost, isLost)
  }
}

const orientations = {
  'N': [0, 1],
  'E': [1, 0],
  'S': [0, -1],
  'W': [-1, 0]
}

for (let r of robots) {
  const testCase = new TestCase(...r)
  testCase.execute()
}