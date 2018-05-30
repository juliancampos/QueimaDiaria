const Db = require('../database/db')
const db = Db()

const MovieModel = require('../database/model/movieModel')({
    db: db
})


const MovieService = {
    save,
    get,
    remove,
    update,
    findById,
    findSearch
}

function findSearch(searchParam, callback){
    MovieModel.findSearch(searchParam, function(result){
        callback(result)
    })
}

function findById(id, callback){
    MovieModel.findById(id, function(result){
        callback(result)
    })
}

function save(movie, callback) {
    MovieModel.save(movie, function(result){
        callback(result)
    })
}

function get(searchParam, callback) {
    MovieModel.get(searchParam, function(result){
        callback(result)
    })
}

function remove(searchParam, callback) {
    MovieModel.remove(searchParam, function(result){
        callback(result)
    })
}

function update(movie, callback){
    MovieModel.update(movie, function(result){
        callback(result)
    })
}

module.exports = function factory(){
    return MovieService
}