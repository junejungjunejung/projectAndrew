const fs = require('fs')

const dataBuffer = fs.readFileSync('json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data)

const newInfo = {
  name:"June",
  planet:"Earth",
  age:32
}

const newInfoJSON = JSON.stringify(newInfo)
fs.writeFileSync('json.json', newInfoJSON)