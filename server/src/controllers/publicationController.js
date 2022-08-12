const httpStatus = require('../helpers/httpStatus')

const publicationController = (Publication) => {
  const getAllPublications = async (req, res, next) => {
    try {
      const { query } = req

      const publication = await publication.find(query)

      return res.status(httpStatus.OK).json(publication)
    } catch (err) {
      next(err)
    }
  }

  const postPublication = async (req, res, next) => {
    try {
      const { body } = req

      const publication = await new Publication(body)

      await publication.save()

      res.status(httpStatus.CREATED).json(publication)
    } catch (err) {
      next(err)
    }
  }
  
  const putPublicationById = async (req, res, next) => {
    try {
      const { body, params } = req

      const checkData = await Publication.find({
        _id: params.id
      })

      if (checkData === null) {
        return res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
      }
      await Publication.updateOne(
        {
          _id: params.id
        },
        {
            $set: {
                title: {},
                date: {},
                artist: {},
                price: {},
                photo: {},
            }
        }
      )

      return res.status(httpStatus.CREATED).send('Data successful updated')
    } catch (err) {
      next(err)
    }
  }

  const getPublicationById = async (req, res, next) => {
   try{ 
      const { params } = req
      
      const response = await publication.findById(params.id)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const deletePublicationById = async (req, res, next) => {
    try{ 
      const { params } = req

      const response = await Publication.findByIdAndDelete(params.id)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  return {
    getAllPublications,
    postPublication,
    putPublicationById,
    getPublicationById,
    deletePublicationById
  }
}

module.exports = publicationController