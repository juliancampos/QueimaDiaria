const express = require('express')
const Controller = require('../controller/userController')
const AuthController = require('../controller/authController')

const router = express.Router()
const controller = Controller()
const authController = AuthController()


router.route('/')
    .get   ( authController.verifyAdminToken, controller.get    )
    .post  ( authController.verifyAdminToken, controller.save   )
    .delete( authController.verifyAdminToken, controller.remove )
    .put   ( authController.verifyAdminToken, controller.update )


router.route('/signIn')
    .post(controller.signIn)


router.route('/:userId')
    .get(authController.verifyAdminToken, controller.findById)


router.route('/findBy')
    .post(authController.verifyAdminToken, controller.findBy)


router.route('/:userId/movie')
    .post(authController.verifyAdminToken, controller.rentmovie)
    .delete(authController.verifyAdminToken, controller.deliverMovie)


router.route('/usersWithRentedMovie')
    .get(authController.verifyAdminToken, controller.usersWithRentedMovie)


router.route('/lateDevolution')
    .get(authController.verifyAdminToken, controller.lateDevolution)


module.exports = router