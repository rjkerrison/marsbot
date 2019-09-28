const Grid = require('./grid')
const Robot = require('./robot')
const { getVector, getCompass } = require('./orientation')

class Scenario {
  constructor() {
    this.robots = []
  }

  addGridLine(line) {
    const [x, y] = line.split(' ')
    this.grid = new Grid(x, y)
  }

  addRobotLines(position, moves) {
    const [x_string, y_string, c] = position.split(' ')
    const [x, y] = intFromString(x_string, y_string)

    const robot = new Robot(x, y, {...getVector(c)}, this.grid)
    this.robots.push({robot, moves})
  }

  execute() {
    const outputLines = this.robots.map(function({robot, moves}) {
      robot.move_all(moves)

      return `${robot.x} ${robot.y} ${getCompass(robot.o)}${robot.isLost ? ' LOST' : ''}`
    })

    return outputLines
  }
}

function* intFromString(...strings) {
  for (let s of strings) {
    yield (s * 1)
  }
}

module.exports = Scenario
