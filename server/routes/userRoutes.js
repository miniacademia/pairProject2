const router = require('express').Router()
const UserController = require('../controllers/userController')

router.post('/register',UserController.login)
router.post('/login',UserController.create)
router.post('/googleSignIn',UserController.googleSignIn)

module.exports = router
