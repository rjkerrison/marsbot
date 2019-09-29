const Grid = require('./grid')
const Robot = require('./robot')
const { getVector, getCompass } = require('./orientation')

class Scenario {
  constructor(config) {
    if (config) {
      const {maxNorth, maxEast, maxCommands} = config
      this.maxNorth = maxNorth
      this.maxEast = maxEast
      this.maxCommands = maxCommands
    }

    this.robots = []
  }

  addGridLine(line) {
    const [x, y] = this._applyGridLimits(...intFromString(...line.split(' ')))
    this.grid = new Grid(x, y)
  }

  addRobotLines(position, commands) {
    const [x_string, y_string, c] = position.split(' ')
    const [x, y] = this._applyGridLimits(...intFromString(x_string, y_string))

    const robot = new Robot(x, y, {...getVector(c)}, this.grid)
    commands = this._applyCommandsLimit(commands)

    this.robots.push({robot, commands})
  }

  execute() {
    const outputLines = this.robots.map(function({robot, commands}) {
      robot.move_all(commands)

      return `${robot.x} ${robot.y} ${getCompass(robot.o)}${robot.isLost ? ' LOST' : ''}`
    })

    return outputLines
  }

  _applyGridLimits(x, y) {
    if (this.maxEast) {
      x = Math.min(x, this.maxEast)
    }
    if (this.maxNorth) {
      y = Math.min(y, this.maxNorth)
    }
    return [x, y]
  }

  _applyCommandsLimit(commands) {
    if (this.maxCommands) {
      return commands.substring(this.maxCommands)
    }
    return commands
  }
}

function* intFromString(...strings) {
  for (let s of strings) {
    yield (s * 1)
  }
}

module.exports = Scenario
