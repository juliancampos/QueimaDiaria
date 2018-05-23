const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const config = require('config')
const clientRoute = require('./api/routes/clientRoute')

var app = express()

app.use(bodyParser.urlencoded({'extended':'true'}))
app.use(bodyParser.json())

app.set('port', config.get('app.port'))
app.listen(app.get('port'))

app.use('/api/client', clientRoute)

console.log(`api listening on port ${app.get('port')}`)