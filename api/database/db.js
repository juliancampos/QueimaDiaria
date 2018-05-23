const config = require('config')
const urlConnection = config.get('database.connection_uri')

const Mongoose = require('mongoose')
const mongoose = Mongoose.connection

const db = {
    save,
    get
}

function get(model, schema, callback){
    mongoose.once('open', function(){
        model.find(schema, function(error, data){
            if (error)
                return console.log(error)
            callback(data)
        })
    })
    Mongoose.connect(urlConnection)
}


function save(model, schema, callback){
    mongoose.once('open', function() {
        model.save(function(error, model){
            if (error)
                return console.log(error)
            callback(model)
        })
    })
    Mongoose.connect(urlConnection)
}

module.exports = function factory() {
    return db
}