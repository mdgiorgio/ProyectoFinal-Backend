const express = require('express')
const publicationController = require('../controllers/publicationController')
const validator = require('express-joi-validation').createValidator({})
const  { paramsSchema, bodySchema, querySchema } = require('../validations/publicationValidator')


const router = (publication) => {
    const publicationRouter = express.Router()

    const { getAllPublications, postPublication, putPublicationById, getPublicationById, deletePublicationById } =
    publicationController(publication)

    publicationRouter
    .route('/publication')
    .get(validator.query(querySchema), getAllPublications)
    .post(validator.body(bodySchema), postPublication)
  
    publicationRouter
    .route('/publication/:id')
    .get(validator.params(paramsSchema), getPublicationById)
    .put(validator.params(paramsSchema), validator.body(bodySchema), putPublicationById)
    .delete(validator.params(paramsSchema), deletePublicationById)
  
  return publicationRouter
}

module.exports = router