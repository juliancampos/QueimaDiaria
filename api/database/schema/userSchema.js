const Mongoose = require('mongoose')
const rentedMovieSchema = require('./rentedMovie')
const TYPE_USER = ['admin','common']


const userSchema = new Mongoose.Schema({
    name:     {type: String, required: true},
    type:     {type: String, required: true, enum: TYPE_USER},
    cpf:      {type: String, required: true, unique: true},
    email:    {type: String, required: true, unique: true},
    celphone: {type: String, required: true},
    password: {type: String, required: true},
    movies: [rentedMovieSchema]
})


module.exports = userSchema