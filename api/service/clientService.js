const Db = require('../database/db')
const db = Db()

const ClientSchema = require('../database/schema/clientSchema')({
    db: db
})

const ClientService = { save, get }

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

module.exports = function factory(){
    return ClientService
}