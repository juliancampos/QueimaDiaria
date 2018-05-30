const jwt = require('jsonwebtoken')
const config = require('config')
const tokenKey = config.get('token.key')

const AuthService = {
    generateToken,
    verifyToken
}


function verifyToken(token, callback) {
    jwt.verify(token, tokenKey, function(error, decoded){
        if (error)
            callback("Invalid token")

        callback(decoded)
    })
}


function generateToken(user){
    return jwt.sign( 
        { 
            email: user.email, 
            _id: user._id,
            type: user.type  
        }, 
        tokenKey,
        {expiresIn: 2440}
    )
}

module.exports = function factory(){
    return AuthService
}