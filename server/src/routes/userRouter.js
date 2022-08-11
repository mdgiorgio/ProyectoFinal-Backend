const express = require('express')
const userController = require('../controllers/UserController')
const validator = require('express-joi-validation').createValidator({})
const  { paramsSchema, bodySchema, querySchema } = require('../validations/UserValidator')


const router = (User) => {
  const userRouter = express.Router()

  const { getAllUser, getUserById, putUserById, deleteUserById } =
  userController(User)

  userRouter
    .route('/User')
    .get(validator.query(querySchema), getAllUser)
  
  userRouter
    .route('/User/:id')
    .get(validator.params(paramsSchema), getUserById)
    .put(validator.params(paramsSchema), validator.body(bodySchema), putUserById)
    .delete(validator.params(paramsSchema), deleteUserById)
  
  return userRouter
}

module.exports = router

