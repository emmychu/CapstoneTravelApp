var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

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

app.listen(8090, () => {
    console.log('Travel App listening on port 8090!')
})