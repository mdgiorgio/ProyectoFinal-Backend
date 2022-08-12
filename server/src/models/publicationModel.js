const mongoose = require('mongoose')

const { Schema } = mongoose

const publicationModel = new Schema({
    title: { type: String, required: true, minLength: 3, maxLength: 60 },
    date: { type: Date, required: true },
    artist: { type: String, required: true, minLength: 3, maxLength: 45 },
    price: { type: Number, required: true, maxLength: 999999 },
    
  })

module.exports = mongoose.model('Publication', publicationModel)