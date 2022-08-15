const express = require ('express')
const authController = require('../controllers/authController.js')
const { bodySchema } = require('../validations/userValidator')

const router = (User) => {
    const authRouter = express.Router()

    const { logIn, register } = authController(User)

    authRouter
        .route('/auth/login')
        .post(logIn)

    authRouter
        .route('/auth/register')
        .post(validator.body(bodySchema), register)

    return authRouter
}

module.exports = router
