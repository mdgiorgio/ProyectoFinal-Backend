const Joi = require('joi')

const paramsSchema = Joi.object({    
        id: Joi.string().min(24).max(24).required() 
    });

const querySchema = Joi.object({
    title: Joi.string,
    date: Joi.date,
    artist: Joi.string,
    price: Joi.number
})

const bodySchema = Joi.object({
    title: Joi.string().alphanum().min(3).max(60).required,
    date: Joi.date().required,
    artist: Joi.string().min(3).max(45).required,
    price: Joi.number().max(999999).required,
    ticket: Joi.number().max(200000).required,
    category: Joi.string().required
    
})



module.exports = { paramsSchema, bodySchema, querySchema }