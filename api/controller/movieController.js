const Service = require('../service/movieService')
const service = Service()

const MovieController = {
    get,
    save,
    remove,
    update,
    findBy
}


function findBy(req, resp){
    try {
        movieSearch = req.body
        service.get(movieSearch, function(result){
            resp.status(200).send(result)
        })
    } catch(error) {
        resp.status(404).send(error)
    }
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

function find(req, resp){
    try {
        service.get(resp.body, function(result){
            resp.status(200).send(result)
        })
    } catch(error){
        resp.status(404).send(error)
    }
}

function save(req, resp){
    try {
        movie = req.body
        service.save(movie, function(result){
            resp.status(201).send(result)
        })
    } catch(error){
        resp.status(404).send(error)
    }
}

function remove(req, resp) {
    try {
        movie = { "_id": req.body.id }
        service.remove(movie, function(result){
            resp.status(200).send(result)
        })
    } catch(error) {
        resp.status(404).send(error)
    }
}

function update(req, resp){
    try {
        movie = req.body
        service.update(movie, function(result){
            resp.status(200).send(result)
        })
    } catch(error) {
        resp.status(404).send(error)
    }
}


module.exports = function factory(){
    return MovieController
}