
const Mongoose = require('mongoose')

const rentedMovieSchema = new Mongoose.Schema({
    name:           {type: String},
    rentDate:       {type: Date, required: true},
    devolutionDate: {type: Date, required: true}
})

module.exports = rentedMovieSchema