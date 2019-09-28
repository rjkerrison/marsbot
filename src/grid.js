class Grid {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.smells = []
  }

  contains(square) {
    return square.x >= 0
      && square.x <= this.x
      && square.y >= 0
      && square.y <= this.y
  }

  addSmell(square) {
    this.smells.push(square)
  }

  isSmell(square) {
    return this.smells.some(s => s.x == square.x && s.y == square.y)
  }
}

module.exports = Grid
