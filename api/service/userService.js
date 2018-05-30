const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Db = require('../database/db')
const db = Db()

const UserModel = require('../database/model/userModel')({
    db: db
})


const UserService = {
    save,
    get,
    remove,
    update,
    findById,
    comparePassword,
    findSearch
}

function save(user, callback) {
    user.password = bcrypt.hashSync(user.password,10)
    UserModel.save(user, function(result){
        callback(result)
    })
}

function get(searchParam, callback) {
    UserModel.get(searchParam, function(result){
        callback(result)
    })
}

function findSearch(searchParam, callback){
    UserModel.findSearch(searchParam, function(result){
        callback(result)
    })
}

function remove(searchParam, callback) {
    UserModel.remove(searchParam, function(result){
        callback(result)
    })
}

function update(user, callback) {
    UserModel.update(user, function(result){
        callback(result)
    })
}

function findById(id, callback){
    UserModel.findById(id, function(result) {
        callback(result)
    })
}

function comparePassword(user, password) {
    return (bcrypt.compareSync(password, user.password))
}


module.exports = function factory(){
    return UserService
}