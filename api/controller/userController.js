const Service = require('../service/userService')
const MovieService = require('../service/movieService')
const AuthService = require('../service/authService')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const moment = require('moment')

const service = Service()
const movieService = MovieService()
const authService = AuthService()

const UserController = {
    get,
    save,
    remove,
    update,
    findById,
    findBy,
    rentmovie,
    deliverMovie,
    signIn,
    usersWithRentedMovie,
    lateDevolution
}

function deliverMovie(req, resp){
    try {
        service.findById(req.params.userId, function(user){
            var movie = user[0].movies.id(req.body.movieId)
            user[0].movies.remove(movie)
            service.update(user[0], function(result){
                resp.status(200).send(result)
            })
        })
    } catch(error){
        resp.status(400).send(error)
    }
}


function rentmovie(req, resp){
    try {

        if ((!moment(req.body.rentDate, "YYYY-MM-DD").isValid()) || (!moment(req.body.devolutionDate, "YYYY-MM-DD").isValid()))
            resp.status(400).send("Invalid date")

        service.findById(req.params.userId, function(user){
            movieService.findById(req.body.movieId, function(movie){
                movie.rentDate = req.body.rentDate
                movie.devolutionDate = req.body.devolutionDate

                user[0].movies.push(
                    {
                        'name': movie[0].name,
                        'rentDate': req.body.rentDate,
                        'devolutionDate': req.body.devolutionDate
                    }
                )

                service.update(user[0], function(result){
                    resp.status(200).send(result)
                })
            })
        })

    } catch(error) {
        resp.status(404).send(error)
    }
}



function get(req, resp){
    try {
        service.get({}, function(result){
            var listUsers = result.filter(function(user){
                return user.movies = []
            })
            resp.status(200).send(listUsers)    
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
        user = req.body
        service.save(user, function(result){
            resp.status(201).send(result)
        })
    } catch(error){
        resp.status(404).send(error)
    }
}


function remove(req, resp) {
    try {
        user = { "_id": req.body.id }
        service.remove(user, function(result){
            resp.status(200).send(result)
        })
    } catch(error) {
        resp.status(404).send(error)
    }
}


function update(req, resp) {
    try {
        user = req.body
        service.update(user, function(result){
            resp.status(200).send(result)
        })
    } catch(error){
        resp.status(404).send(error)
    }    
}


function findById(req, resp){
    try {
        service.findById(req.params.userId, function(result){
            resp.status(200).send(result)
        })
    } catch(error){
        resp.status(404).send(error)
    }
}


function findBy(req, resp){
    try {
        user = {}

        if (req.body.cpf.length > 0)
            user.cpf = {$regex: req.body.cpf}

        if (req.body.name.length > 0)
            user.name = {$regex: req.body.name}

        if (req.body.email.length > 0)
            user.email = {$regex: req.body.email}

        if (req.body.celphone.length > 0)
            user.celphone = {$regex: req.body.celphone}


        service.findSearch(user, function(result){
            var listUsers = result.filter(function(user){
                return user.movies = []
            })
            resp.status(200).send(listUsers)
        })
    } catch(error) {
        resp.status(404).send(error)
    }
}


function signIn(req, resp) {
    try {
        var searchUser = {  "email": req.body.email }
        service.get(searchUser, function(user){
            if (service.comparePassword(user[0], req.body.password)){
                resp.status(200).send(authService.generateToken(user[0]))
            } else {
                resp.status(404).send('user or password incorrect')
            }
        })
    } catch(error) {
        resp.status(404).send(error)
    }
}


function usersWithRentedMovie(req, resp){
    try {
        service.get({},function(listUsers){
            var list = listUsers.filter(function(user){
                return user.movies.length > 0
            })
            resp.status(200).send(list)
        })
    } catch(error) {
        resp.status(404).send(error)
    }
}


function lateDevolution(req, resp) {
    try {
        service.get({'movies.devolutionDate': { $lte : new Date() }}, function(listUsers){
            resp.status(200).send(listUsers)
        })
    } catch(error) {
        resp.status(404).send(error)
    }
}


module.exports = function factory(){
    return UserController
}