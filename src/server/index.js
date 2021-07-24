
// const dotenv = require('dotenv');
// dotenv.config();

var path = require('path')
const fetch = require('node-fetch');
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors');
const getCoordinates = require('./coordinateAPI');
const getImage = require('./imageApi');
const getWeather = require ('./weatherApi')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'))
console.log(__dirname)

app.get('/', (request,res) => {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.listen(8095, () => {
    console.log('Travel App listening on port 8095!')
})

app.post('/submission', getData);

// var textAPI = {
//     geoUser: process.env.GEO_USER,
//     photoKey: process.env.API_KEY_PIX,
//     weatherKey: process.env.API_KEY_WEATHER
// }

function getData(request, response){
    getCoordinates(request.body)
    .then((data) =>{
        response.send(data)
    })
}

app.post('/image', getPic)

function getPic(request, response){
    getImage(request.body)
    .then((data) =>{
        response.send(data)
    })
}

app.post('/weather', weatherAPI)

function weatherAPI(request,response){
    getWeather(request.body)
    .then((data)=>{
        response.send(data)
    })
}

module.exports = app