const Mongoose = require('mongoose')

const clientSchema = new Mongoose.Schema({
    name: String,
    email: String,
    celphone: String
})

module.exports = clientSchema