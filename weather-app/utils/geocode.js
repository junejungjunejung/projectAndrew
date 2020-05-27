const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoianVuZWp1bmdqdW5lanVuZyIsImEiOiJjanhkbThmNW4wMTdyM3VwZWpmeHFvZHI5In0.lQwRKuEcB0Le0KT5MyjGmw&limit=1'

  request({ url, json:true },(error, {body})=>{
    if (error){
      callback('unable to connect to location service', undefined)
    } else if (body.features.length === 0){
      callback('unable to find location. try another search', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode

// const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/vancouver.json?access_token=pk.eyJ1IjoianVuZWp1bmdqdW5lanVuZyIsImEiOiJjanhkbThmNW4wMTdyM3VwZWpmeHFvZHI5In0.lQwRKuEcB0Le0KT5MyjGmw&limit=1'

// request({url: mapboxUrl, json:true },((error, response)=>{
//   if (error){
//     console.log('unable to connect to location service')
//   } else if (response.body.features.length === 0){
//     console.log('unable to find location')
//   } else {
//     console.log(response.body.features[0].center)
//   }
// }))