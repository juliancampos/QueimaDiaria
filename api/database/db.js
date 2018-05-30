const config = require('config')
const urlConnection = config.get('database.connection_uri')

const Mongoose = require('mongoose')
const mongoose = Mongoose.connection

const db = { 
    save, 
    get, 
    remove, 
    update, 
    findById,
    findSearch
}

function findSearch(model, searchParam, callback){
    mongoose.once('open', function(){
        model.find().or([searchParam]).exec(function(error, data){
            if (error)
                callback(error)
            callback(data)
        })
    })
    Mongoose.connect(urlConnection)
}


function remove(model, searchParam, callback){
    mongoose.once('open', function(){
        model.remove(searchParam, function(error, data){
            if (error)
                callback(error)
            callback(data)
        })
    })
    Mongoose.connect(urlConnection)
}

function get(model, searchParam, callback){
    mongoose.once('open', function(){
        model.find(searchParam, function(error, data){
            if (error)
                callback(error)
            callback(data)
        })
    })
    Mongoose.connect(urlConnection)
}

function save(model, callback){
    mongoose.once('open', function() {
        model.save(function(error, model){
            if (error) {
                callback(error)
            }
            callback(model)
        })
    })
    Mongoose.connect(urlConnection)
}

function update(model, client, callback){
    mongoose.once('open', function(){
        model.findByIdAndUpdate(client._id, client, function(error, client){
            if (error) {
                callback(error)
            }
            callback(client)
        })
    })
    Mongoose.connect(urlConnection)
}

function findById(model, id, callback){
    mongoose.once('open', function(){
        model.find({'_id': id}, function(error, model){
            if (error) {
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