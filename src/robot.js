const grid = [5, 3]

class Robot {
  constructor(x, y, orientation) {
    this.x = x
    this.y = y
    this.o = orientation
    this.isLost = false
  }

  move(instruction) {
    if (this.isLost){
      return
    }

    switch (instruction) {
      case 'L':
        this._turnAnticlockwise()
        break
      case 'R':
        this._turnClockwise()
        break
      case 'F':
        this._forward()
        break
    }
  }

  move_all(instructions, verbose) {
    for (var l of instructions) {
      this.move(l)
      if (this.isLost){
        break
      }
      if (verbose) {
        console.log([l, this.x, this.y, this.o])
      }
    }
  }

  _forward() {
    const squareInFront = {
      x: this.x + this.o[0],
      y: this.y + this.o[1]
    }

    if (isOnGrid(squareInFront)) {
      this.x = squareInFront.x
      this.y = squareInFront.y
    }
    else {
      this.isLost = true
    }
  }

  _turnAnticlockwise(orientation) {
    this.o.x = -this.o.y
    this.o.y = this.o.x
  }

  _turnClockwise(orientation) {
    this.o.x = this.o.y
    this.o.y = -this.o.x
  }
}

function isOnGrid(square) {
  return square.x >= 0
    && square.x <= grid[0]
    && square.y >= 0
    && square.y <= grid[1]
}

module.exports = Robot
