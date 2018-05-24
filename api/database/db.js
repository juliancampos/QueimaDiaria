const config = require('config')
const urlConnection = config.get('database.connection_uri')

const Mongoose = require('mongoose')
const mongoose = Mongoose.connection

const db = { save, get, remove, update }

function remove(model, searchParam, callback){
    mongoose.once('open', function(){
        model.remove(searchParam, function(error, data){
            if (error)
                return console.log(error)
            callback(data)
        })
    })
    Mongoose.connect(urlConnection)
}

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

function update(model, callback){
    mongoose.once('open', function(){
        model.findByIdAndUpdate(model._id, {$set:{name:'julian campos'}}, function(error, model){
            if (error) {
                console.log(error)
                callback(error)
            }
            callback(model)
        })
    })
}

function findById(id, callback){
    mongoose.once('open', function(){
        model.findById(id, function(error, model){
            if (error) {
                console.log(error)
                callback(error)
            }
            callback(model)
        })
    })
}


module.exports = function factory() {
    return db
}