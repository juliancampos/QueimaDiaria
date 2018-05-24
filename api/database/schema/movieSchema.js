const Mongoose = require('mongoose')

const movieSchema = new Mongoose.Schema({
    name: String,
    type: String,
    director: String,
    resume: String
})

module.exports = movieSchema