const clientSchema = require('../database/schema/clientSchema')
const Db = require('../database/db')

const db = Db()

const ClientService = {
    save
}

function save(clientModel, callback) {
    clientSchema.save(db, clientModel, function(result){
        callback(result)
    })
}

module.exports = function factory(){
    return ClientService
}