const Db = require('../database/db')
const db = Db()

const ClientSchema = require('../database/schema/clientSchema')({
    db: db
})

const ClientService = { save, get, remove }

function save(clientModel, callback) {
    ClientSchema.save(clientModel, function(result){
        callback(result)
    })
}

function get(searchParam, callback) {
    ClientSchema.get(searchParam, function(result){
        callback(result)
    })
}

function remove(searchParam, callback) {
    ClientSchema.remove(searchParam, function(result){
        callback(result)
    })
}

module.exports = function factory(){
    return ClientService
}