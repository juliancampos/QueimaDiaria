const express = require('express')
const Controller = require('../controller/clientController')

const router = express.Router()
const controller = Controller()

router.route('/save')
    .post(controller.save)

router.route('/get')
    .get(controller.get)

router.route('/remove')
    .post(controller.remove)

router.route('/update')
    .post(controller.update)

router.route('/findById')
    .get(controller.findById)

router.route('/findBy')
    .post(controller.findBy)    

module.exports = router