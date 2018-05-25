const Db = require('../database/db')
const db = Db()

const ClientModel = require('../database/model/clientModel')({
    db: db
})


const ClientService = {
    save,
    get,
    remove,
    update,
    findById
}

function save(client, callback) {
    ClientModel.save(client, function(result){
        callback(result)
    })
}

function get(searchParam, callback) {
    ClientModel.get(searchParam, function(result){
        callback(result)
    })
}

function remove(searchParam, callback) {
    ClientModel.remove(searchParam, function(result){
        callback(result)
    })
}

function update(client, callback) {
    ClientModel.update(client, function(result){
        callback(result)
    })
}

function findById(id, callback){
    ClientModel.findById(id, function(result) {
        callback(result)
    })
}

module.exports = function factory(){
    return ClientService
}