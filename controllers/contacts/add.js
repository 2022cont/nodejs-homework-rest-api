const contacts = require('../../models/contacts')
const RequestError = require('../../helpers')
const contactSchema = require('../../schemas')

const add = async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body)

    if (error) {
      throw RequestError(400, error.message)
    }
    const results = await contacts.addContact(req.body)
    return res.status(201).json(results)
  } catch (error) {
    next(error)
  }
}

module.exports = add