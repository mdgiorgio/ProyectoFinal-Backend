const mongoose = require('mongoose')

const { Schema } = mongoose

const userModel = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 50 },
    username: { type: String,
        required: true,
        minLength: 6,
        maxLength: 30,
        unique: true
    },
    password: { type: String, required: true, minLength: 6, maxLength: 20 },
    mail: { type: String, required: true, unique: true },
    phone: { type: String, required: true, minLength: 11, maxLength: 14 },
    //birthday: {},
    role: { type: String }

})

module.exports = mongoose.model('User', userModel) 