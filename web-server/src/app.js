const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//setup Handlebars engine and Views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'June Jung'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'June Jung'
  })
})

app.get('/help', (req, res)=> {
  res.render('help', {
    helpText: 'some text',
    title: 'Help',
    name: 'June Jung'   
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'warm',
    location: 'vancouver'
  })
})

app.get('/help/*', (req, res)=> {
  res.render('404', {
    message: 'Help article not found.',
    title: '404 help',
    name: 'June Jung'
  })
})

app.get('*', (req, res)=> {
  res.render('404', {
    message: 'Page not found.',
    title: '404',
    name: 'June Jung'
  })
})

app.listen(3000, () => {
  console.log('server is up on port 3000')
})