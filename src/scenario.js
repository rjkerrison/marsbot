const Grid = require('./grid')

class Scenario {
  addGridLine(line) {
    const [x, y] = line.split(' ')
    this.grid = new Grid(x, y)
  }
}

module.exports = Scenario
