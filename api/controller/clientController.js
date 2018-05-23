const Service = require('../service/clientService')
const service = Service()

const ClientController = {
    get,
    save,
    remove
}


function get(req, resp){
    try {
        service.get({}, function(result){
            resp.status(200).send(result)    
        })
    } catch(error) {
        resp.status(404).send(error)
    }
}


function save(req, resp){
    try {
        client = req.body
        service.save(client, function(result){
            resp.status(201).send(result)
        })
    } catch(error){
        resp.status(404).send(error)
    }
}

function remove(req, resp) {
    try {
        client = { "_id": req.body.id }
        service.remove(client, function(result){
            resp.status(200).send(result)
        })
    } catch(error) {
        resp.status(404).send(error)
    }
}


module.exports = function factory(){
    return ClientController
}