const bcrypt = require('bcrypt')
const httpStatus = require('../helpers/httpStatus')

const userController = (User) => {
    const getAllUser = async (req, res, next) => {
        try {
            const { query } = req

            const response = await User.find(query)

            return res.status(httpStatus.OK).json(response)
        } catch (err) {
            next(err)
        }
    }

    const putUserById = async (req, res, next) => {
        try {
            const { body, params } = req

            const checkData = await User.find({
                _id: params.id
            })

            if (checkData === null) {
                return res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
            }

            const encryptedPassword = await bcrypt.hash(body.password, 10)

            await User.updateOne(
                {
                    _id: params.id
                },
                {
                    $set: {
                        name: body.name,
                        username: body.username,
                        password: encryptedPassword,
                        mail: body.email,
                        phone: body.phone,
                        //birthday: ,
                    }
                }
            )

            return res.status(httpStatus.CREATED).send('Data successful updated')
        } catch (err) {
            next(err)
        }
    }

    const getUserById = async (req, res, next) => {
        try {
            const { params } = req

            const response = await User.findById(params.id)

            return res.status(httpStatus.OK).json(response)
        } catch (err) {
            next(err)
        }
    }

    const deleteUserById = async (req, res, next) => {
        try {
            const { params } = req

            const response = await User.findByIdAndDelete(params.id)

            return res.status(httpStatus.OK).json(response)
        } catch (err) {
            next(err)
        }
    }

    return {
        getAllUser,
        getUserById,
        putUserById,
        deleteUserById
    }
}

module.exports = userController