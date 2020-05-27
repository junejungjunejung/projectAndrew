const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (address){ 
  geocode(address,(error, { latitude, longitude, location } = {/*default fuction parameter*/}) => {
    if(error){
      return console.log(error)
    }
  
    forecast(latitude, longitude, (error, forecasData) => {
      if(error){
        return console.log(error)
      }
  
      console.log(location)
      console.log(forecasData)
    })
  })
} else {
  console.log('please provide an address')
}


