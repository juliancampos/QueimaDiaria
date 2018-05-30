const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const config = require('config')
const userRoute = require('./api/routes/userRoute')
const movieRoute = require('./api/routes/movieRoute')
const swaggerDocument = require('./swagger.json')
const swaggerUi = require('swagger-ui-express')


var app = express()


app.use(bodyParser.urlencoded({'extended':'true'}))
app.use(bodyParser.json())
app.use(morgan(':method :url :response-time'))


app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


app.use('/api/user', userRoute)
app.use('/api/movie', movieRoute)

app.set('port', config.get('app.port'))
app.listen(app.get('port'), () => {
    console.log(`api listening on port ${app.get('port')}`)
})