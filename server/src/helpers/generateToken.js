const jwt = require('jsonwebtoken')

const generateToken = (user) => {
  const token = jwt.sign(
    {
      role: user.role
    },
    process.env.SECRET,
    { expiresIn: '5D' }
  )

  return token
}

module.exports = generateToken
