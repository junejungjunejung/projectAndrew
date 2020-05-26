const request = require('request')

const weatherUrl = 'http://api.weatherstack.com/current?access_key=cd9cdfae55d62f5b2cdc955e063c1a46&query=vancouver&units=m'

request({ url: weatherUrl, json: true }, (error, response) => {
  if (error){
    console.log('unable to connect to weather service')
  } else if (response.body.error){
    console.log('unable to find location')
  } else {
    console.log(response.body.current.weather_descriptions[0]+'. it is currently '+ response.body.current.temperature+' degress out. it feels like '+ response.body.current.feelslike +' degress out.')
  }
})

const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/vancouver.json?access_token=pk.eyJ1IjoianVuZWp1bmdqdW5lanVuZyIsImEiOiJjanhkbThmNW4wMTdyM3VwZWpmeHFvZHI5In0.lQwRKuEcB0Le0KT5MyjGmw&limit=1'

request({url: mapboxUrl, json:true },((error, response)=>{
  if (error){
    console.log('unable to connect to location service')
  } else if (response.body.features.length === 0){
    console.log('unable to find location')
  } else {
    console.log(response.body.features[0].center)
  }
}))