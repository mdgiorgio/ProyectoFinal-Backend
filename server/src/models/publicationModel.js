const mongoose = require('mongoose')

const { Schema } = mongoose

const publicationModel = new Schema({
    title: { type: String, required: true, minLength: 3, maxLength: 60 },
    date: { type: Date, required: true },
    artist: { type: String, required: true, minLength: 3, maxLength: 45 },
    price: { type: Number, required: true, maxLength: 999999 },
    ticket: { type: Number, required: true, maxLength: 200000 },
    category: { type: String, required: true }
    
  })

module.exports = mongoose.model('Publication', publicationModel)