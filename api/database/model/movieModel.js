const Mongoose = require('mongoose')
const schema = require('../schema/movieSchema')

function MovieModel(options){
    var db
    if (!options.db) {
        throw new Error('Options.db is required')
    }
    db = options.db
    const MovieModel = Mongoose.model('movies', schema)

    return {
        save: function(model, callback){
            var newMovie = new MovieModel(model)
            db.save(newMovie, function(result){
                callback(result)
            })
        },

        get: function(searchParam, callback){
            db.get(MovieModel, searchParam, function(result){
                callback(result)
            })
        },

        remove: function(searchParam, callback) {
            db.remove(MovieModel, searchParam, function(result){
                callback(result)
            })
        },
        
        update: function(model, callback) {
            db.update(MovieModel, model, function(result){
                callback(result)
            })
        },

        findById: function(id, callback) {
            db.findById(MovieModel, id, function(result){
                callback(result)
            })
        },

        findSearch: function(search, callback) {
            db.findSearch(MovieModel, search, function(result){
                callback(result)
            })
        }
    }
}


module.exports = MovieModel