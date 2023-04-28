const express = require('express')
const router = express.Router()
const contactsController = require('../../controllers/contacts')

router.get('', contactsController.getAll)

router.get('/:contactId', contactsController.getOneById)

router.post('', contactsController.add)

router.put('/:contactId', contactsController.updateById)

router.delete('/:contactId', contactsController.removeById)

module.exports = router
