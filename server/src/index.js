const express = require('express')
const User = require('./models/userModel')
const Publication = require('./models/publicationModel')
const userRouter = require('./routes/userRouter')(User)
const publicationRouter = require('./routes/publicationRouter')(Publication)
const authRouter = require('./routes/authRouter')(User)
const errorHandler = require('./middleware/errorHandler')
//const { expressjwt } = require('express-jwt')
require('dotenv').config()
const httpStatus = require('./helpers/httpStatus')
const PORT = process.env.PORT || 8000

const app = express()

require('./database/db')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/* app.all(
  '/*',
  expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }).unless({
    path: ['/auth/login', '/auth/register']
  })
) */

app.use((err, _, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(httpStatus.UNAUTHORIZED).json({
      error: err.name,
      cause: 'Unauthorized. Missing or invalid token provided.'
    })
  } else {
    next(err)
  }
}) 

app.use('/api', userRouter, publicationRouter)
app.use('/', authRouter) 

app.use(errorHandler)

app.listen(PORT, () => {
  console.log('Server is running')
})