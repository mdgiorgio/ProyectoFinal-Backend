const jwt = require('jsonwebtoken')
const httpStatus = require('../helpers/httpStatus')
const User = require('../models/userModel')

const adminRole = async (req, res, next) => {
    const { authorization } = req.headers;

    if (authorization){
        const token = authorization.split(" ")[1]
        const { role } = await jwt.verify(token, process.env.SECRET)

        if (role === 'Admin'){
            return next()
        }
    } return res.status(httpStatus.UNAUTHORIZED).json({
        cause: 'Unauthorized. Missing or invalid token provided.'
    })
}    

module.exports = adminRole