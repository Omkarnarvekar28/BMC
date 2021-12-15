const Joi = require('joi');

const uservalidation = data => {
    const schema = Joi.object({
        email: Joi.string().email().lowercase(),
        username: Joi.string().alphanum().min(3).max(30),
        phone: Joi.string().length(10).pattern(/^\d+$/)

    }).unknown();

    return schema.validate(data);
}
module.exports.uservalidation = uservalidation;