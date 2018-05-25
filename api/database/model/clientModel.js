const Mongoose = require('mongoose')
const schema = require('../schema/clientSchema')

function ClientModel(options){
    var db
    if (!options.db) {
        throw new Error('Options.db is required')
    }
    db = options.db
    const ClientModel = Mongoose.model('clients', schema)

    return {
        save: function(model, callback){
            var newClient = new ClientModel(model)
            db.save(newClient, function(result){
                callback(result)
            })
        },

        get: function(searchParam, callback){
            db.get(ClientModel, searchParam, function(result){
                callback(result)
            })
        },

        remove: function(searchParam, callback) {
            db.remove(ClientModel, searchParam, function(result){
                callback(result)
            })
        },

        update: function(model, callback) {
            db.update(ClientModel, model, function(result){
                callback(result)
            })
        },

        findById: function(id, callback){
            db.findById(ClientModel, id, function(result){
                callback(result)
            })
        }
    }
}


module.exports = ClientModel