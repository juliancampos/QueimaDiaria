const Mongoose = require('mongoose')

const clientSchema = new Mongoose.Schema({
    name: String
})

const ClientModel = Mongoose.model('clients', clientSchema)

const ClientSchema = {
    save
}


function save(db, model, callback) {
    db.save(model, clientSchema, function(result){
        callback(result)
    })
}

module.exports = ClientSchema