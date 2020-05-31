const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=cd9cdfae55d62f5b2cdc955e063c1a46&query='+ latitude +','+ longitude +'&units=m'

  request({ url, json:true },(error, {body})=>{
    if (error){
      callback('unable to connect to weather service', undefined)
    } else if (body.error){
      callback('unable to find location. try another search', undefined)
    } else {
      callback(undefined, body.current.weather_descriptions[0]+'. It is currently '+ body.current.temperature+' degress out. It feels like '+ body.current.feelslike +' degress out. ' + 'Humidity is ' + body.current.humidity + '%.')
    }
  })
}

module.exports = forecast

// const weatherUrl = 'http://api.weatherstack.com/current?access_key=cd9cdfae55d62f5b2cdc955e063c1a46&query=vancouver&units=m'

// request({ url: weatherUrl, json: true }, (error, response) => {
//   if (error){
//     console.log('unable to connect to weather service')
//   } else if (response.body.error){
//     console.log('unable to find location')
//   } else {
//     console.log(response.body.current.weather_descriptions[0]+'. it is currently '+ response.body.current.temperature+' degress out. it feels like '+ response.body.current.feelslike +' degress out.')
//   }
// })