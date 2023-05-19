const express = require('express');
const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas");
const router = express.Router();


router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getById);

router.post('/', validateBody(schemas.contactSchema), ctrl.add)

router.put('/:contactId', validateBody(schemas.contactSchema), ctrl.updateById);

router.delete('/:contactId', ctrl.deleteById);

module.exports = router;
