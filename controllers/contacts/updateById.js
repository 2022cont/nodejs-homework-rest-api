const contacts = require('../../models/contacts')
const contactSchema = require('../../schemas')
const RequestError = require('../../helpers')

const updateById = async (req, res, next) => {

  try {
    const { error } = contactSchema.validate(req.body)
    if (error) {
      throw RequestError(400, error.message)
    }
    const { contactId } = req.params
    const result = await contacts.updateContactById(contactId,req.body)
    if (!result) {
      throw RequestError(404, 'Not found')
    }
    res.json(result)
  } catch (error) {
    next(error)
  }

}

module.exports = updateById