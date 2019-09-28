class Robot {
  constructor(x, y, orientation, grid) {
    this.x = x
    this.y = y
    this.o = orientation
    this.isLost = false
    this.grid = grid
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

  move_all(instructions) {
    for (var l of instructions) {
      this.move(l)
      if (this.isLost){
        break
      }
    }
  }

  _forward() {
    const squareInFront = {
      x: this.x + this.o.x,
      y: this.y + this.o.y
    }

    if (this.grid.contains(squareInFront)) {
      this.x = squareInFront.x
      this.y = squareInFront.y
    }
    else {
      this.isLost = true
    }
  }

  _turnAnticlockwise() {
    this.o = {x: -this.o.y, y: this.o.x}
  }

  _turnClockwise() {
    this.o = {x: this.o.y, y: -this.o.x}
  }
}

module.exports = Robot
