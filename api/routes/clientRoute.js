const express = require('express')
const Controller = require('../controller/clientController')

const router = express.Router()
const controller = Controller()

router.route('/save')
    .post(controller.save)

module.exports = router