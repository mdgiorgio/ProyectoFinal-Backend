const httpStatus = require('../helpers/httpStatus')

const showController = (Show) => {
  const getAllShows = async (req, res, next) => {
    try {
      const { query } = req

      const show = await Show.find(query)

      return res.status(httpStatus.OK).json(show)
    } catch (err) {
      next(err)
    }
  }

  const postShow = async (req, res, next) => {
    try {
      const { body } = req

      const show = await new Show(body)

      await show.save()

      res.status(httpStatus.CREATED).json(show)
    } catch (err) {
      next(err)
    }
  }
  
  const putShowById = async (req, res, next) => {
    try {
      const { body, params } = req

      const checkData = await Show.find({
        _id: params.id
      })

      if (checkData === null) {
        return res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
      }
      await Show.updateOne(
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

  const getShowById = async (req, res, next) => {
   try{ 
      const { params } = req
      
      const response = await Show.findById(params.id)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const deleteShowById = async (req, res, next) => {
    try{ 
      const { params } = req

      const response = await Show.findByIdAndDelete(params.id)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  return {
    getAllShows,
    postShow,
    putShowById,
    getShowById,
    deleteShowById
  }
}

module.exports = showController