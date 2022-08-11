const Joi = require('joi')

const paramsSchema = Joi.object({    
        id: Joi.string().min(24).max(24).required() 
    });

const querySchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(50),
    username: Joi.string().min(6).max(30)
    
})

const bodySchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(50).required().trim(),
    username: Joi.string().min(6).max(30).required().trim(),
    password: Joi.string().required().trim().min(6).max(20),
    mail: Joi.string().email().required().trim(),
    phone: Joi.string().min(9).max(13).required().trim()
    //birthday: {},    
})

const bodyAuthSchema = Joi.object({
        name: Joi.string().alphanum().min(3).max(50).required().trim(),
    username: Joi.string().min(6).max(30).required().trim(),
}) 

module.exports = { paramsSchema, bodySchema, querySchema, bodyAuthSchema }