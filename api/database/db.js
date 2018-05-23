const config = require('config')
const urlConnection = config.get('database.connection_uri')

const Mongoose = require('mongoose')
const mongoose = Mongoose.connection

const db = { save, get }


function get(model, searchParam, callback){
    mongoose.once('open', function(){
        model.find(searchParam, function(error, data){
            if (error)
                return console.log(error)
            callback(data)
        })
    })
    Mongoose.connect(urlConnection)
}


function save(model, callback){
    mongoose.once('open', function() {
        model.save(function(error, model){
            if (error) {
                console.log(error)
                callback(error)
            }
            callback(model)
        })
    })
    Mongoose.connect(urlConnection)
}


module.exports = function factory() {
    return db
}