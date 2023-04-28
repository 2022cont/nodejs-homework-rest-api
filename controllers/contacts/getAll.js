const contacts = require('../../models/contacts')

const getAll = async (req, res, next) => {
  try {
    const result = await contacts.listContacts()
    res.json(result)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }

}

module.exports = getAll