const express = require('express')
const showController = require('../controllers/showController')
const validator = require('express-joi-validation').createValidator({})
const  { paramsSchema, bodySchema, querySchema } = require('../validations/movieValidator')


const router = (Show) => {
    const showRouter = express.Router()

    const { getAllShows, postShow, putShowById, getShowById, deleteShowById } =
    showController(Show)

    showRouter
    .route('/show')
    .get(validator.query(querySchema), getAllShows)
    .post(validator.body(bodySchema), postShow)
  
    showRouter
    .route('/show/:id')
    .get(validator.params(paramsSchema), getShowById)
    .put(validator.params(paramsSchema), validator.body(bodySchema), putShowById)
    .delete(validator.params(paramsSchema), deleteShowById)
  
  return showRouter
}

module.exports = router