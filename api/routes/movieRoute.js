const express = require('express')
const Controller = require('../controller/movieController')
const AuthController = require('../controller/authController')


const router = express.Router()
const controller = Controller()
const authController = AuthController()


router.route('/')
    .get (authController.verifyToken,       controller.get)
    .put (authController.verifyAdminToken,  controller.update)
    .post(authController.verifyAdminToken, controller.save)
    .delete(authController.verifyToken,    controller.remove)

router.route('/findBy')
    .post(authController.verifyToken, controller.findBy)

router.route('/findById/:movieId')
    .get(authController.verifyToken, controller.findById)


module.exports = router