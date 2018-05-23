/*const Mongoose = require('mongoose')

const clientSchema = new Mongoose.Schema({
    name: String
})*/

const schema = require('../schema/clientSchema')



function ClientModel(options){
    var db
    if (!options.db) {
        throw new Error('Options.db is required')
    }
    db = options.db
    const ClientModel = Mongoose.model('clients', clientSchema)

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
        }
    }
}


module.exports = ClientModel