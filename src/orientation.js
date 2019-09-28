const clockwise = ({x, y}) => ({x: y, y: -x})
const anticlockwise = ({x, y}) => ({x: -y, y: x})
const getVector = (x) => compassPoints[x]

function getCompass({x, y}) {
  return Object.keys(compassPoints).filter(point => {
    let vector = compassPoints[point]
    return vector.x == x
      && vector.y == y
  })[0]
}

const compassPoints = {
  'N': {x: 0, y: 1},
  'E': {x: 1, y: 0},
  'S': {x: 0, y: -1},
  'W': {x: -1, y: 0}
}

module.exports = {
  clockwise,
  anticlockwise,
  getVector,
  getCompass
}
