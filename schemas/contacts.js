const Joi = require("joi");
const contactSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().required().email(),
    phone: Joi.string().pattern(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/).messages({ "string.pattern.base": "Invalid phone number format. The format should be (XXX) XXX-XXXX" }).required(),
})

module.exports = contactSchema;