const AuthService = require('../service/authService')
const authService = AuthService()

const AuthController = {
    verifyToken,
    verifyAdminToken
}

function verifyToken(req, resp, next){
    try {
        var token = req.headers['x-access-token'];
        authService.verifyToken(token, function(user){
            next()
        })
    } catch(error) {
        resp.status(500).send(error)
    }
}

function verifyAdminToken(req, resp, next){
    try {
        var token = req.headers['x-access-token'];
        authService.verifyToken(token, function(decoded){
            if (decoded.type == 'admin') {
                next()
            } else {
                throw "You don't have permission to this action"
            }
        })
    } catch(error) {
        resp.status(500).send(error)
    }
}

module.exports = function factory() {
    return AuthController
}