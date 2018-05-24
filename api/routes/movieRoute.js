const express = require('express')
const Controller = require('../controller/movieController')

const router = express.Router()
const controller = Controller()

router.route('/movie/save')
    .post(controller.save)

router.route('/movie/find')
    .get(controller.get)

router.route('/movie/remove')
    .post(controller.remove)
    
module.exports = router