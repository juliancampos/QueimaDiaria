const Mongoose = require('mongoose')
const schema = require('../schema/userSchema')

function UserModel(options){
    var db
    if (!options.db) {
        throw new Error('Options.db is required')
    }
    db = options.db
    const UserModel = Mongoose.model('users', schema)

    return {
        save: function(model, callback){
            var newUser = new UserModel(model)
            db.save(newUser, function(result){
                callback(result)
            })
        },

        get: function(searchParam, callback){
            db.get(UserModel, searchParam, function(result){
                callback(result)
            })
        },

        remove: function(searchParam, callback) {
            db.remove(UserModel, searchParam, function(result){
                callback(result)
            })
        },

        update: function(model, callback) {
            db.update(UserModel, model, function(result){
                callback(result)
            })
        },

        findById: function(id, callback){
            db.findById(UserModel, id, function(result){
                callback(result)
            })
        },

        findSearch: function(search, callback) {
            db.findSearch(UserModel, search, function(result){
                callback(result)
            })
        }
    }
}


module.exports = UserModel