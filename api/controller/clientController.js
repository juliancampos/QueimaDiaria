const Service = require('../service/clientService')
const service = Service()

const ClientController = {
    get,
    save
}

function get(req, resp){
    resp.status(201).send('test get')
}

function save(req, resp){
    try {
        //"event": req.body.event,
        var client = {
            "name":"Marina Mendes"
        }
        service.save(client, function(result){
            resp.status(201).send(result)
        })
    } catch(error){
        resp.status(404).send(error)
    }
}

module.exports = function factory(){
    return ClientController
}