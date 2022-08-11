const Joi = require('joi')

const paramsSchema = Joi.object({    
        id: Joi.string().min(24).max(24).required() 
    });

const querySchema = Joi.object({
    
})

const bodySchema = Joi.object({

})



module.exports = { paramsSchema, bodySchema, querySchema }