class Grid {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  contains(square) {
    return square.x >= 0
      && square.x <= this.x
      && square.y >= 0
      && square.y <= this.y
  }
}

module.exports = Grid
