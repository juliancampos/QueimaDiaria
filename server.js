const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const config = require('config')
const clientRoute = require('./api/routes/clientRoute')


var app = express()


app.use(bodyParser.urlencoded({'extended':'true'}))
app.use(bodyParser.json())
app.use(morgan(':method :url :response-time'))


app.use('/api', clientRoute)


app.set('port', config.get('app.port'))
app.listen(app.get('port'), () => {
    console.log(`api listening on port ${app.get('port')}`)
})