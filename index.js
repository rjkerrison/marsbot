const Scenario = require('./src/scenario')

const readline = require('readline')

const lineReader = readline.createInterface({
  input: require('fs').createReadStream(__dirname + '/instructions.txt')
})

const scenario = new Scenario()

let lineCounter = 0
const robotLines = []

lineReader.on('line', (line) => {
  lineCounter++

  if (lineCounter == 1) {
    scenario.addGridLine(line)
  }
  else {
    robotLines.push(line)
  }
})

lineReader.on('close', () => {
  addRobotLines()

  const output = scenario.execute()
  for (let line of output) {
    console.log(line)
  }
})

function addRobotLines() {
  for (let i = 0; i < robotLines.length; i+=2) {
    scenario.addRobotLines(robotLines[i], robotLines[i+1])
  }
}