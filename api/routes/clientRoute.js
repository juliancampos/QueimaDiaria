const express = require('express')
const Controller = require('../controller/clientController')

const router = express.Router()
const controller = Controller()

router.route('/client/save')
    .post(controller.save)

router.route('/client/find')
    .get(controller.get)

router.route('/client/remove')
    .post(controller.remove)
    
module.exports = router