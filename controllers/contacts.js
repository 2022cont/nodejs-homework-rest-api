const contacts = require("../models/contacts");
const { ctrlWrapper } = require("../helpers");


const getAll = async (req, res) => {
    const result = await contacts.listContacts();
    res.json(result);

};

const getById = async (req, res) => {
    const { contactId } = req.params;
    const result = await contacts.getContactById(contactId);
    if (!result) {
        const message = "Not found";
        return res.status(404).json(message);
    }
    res.json(result);

};

const add = async (req, res) => {

    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
};

const updateById = async (req, res) => {

    const { contactId } = req.params;
    const result = await contacts.updateContactById(contactId, req.body);
    if (!result) {
        const message = "Not found";
        return res.status(404).json(message);
    }
    res.json(result);
};

const deleteById = async (req, res) => {
    const { contactId } = req.params;
    const result = await contacts.removeContact(contactId);
    if (!result) {
        const message = "Not found";
        return res.status(404).json(message);
    }
    res.json("Delete success");
};

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    updateById: ctrlWrapper(updateById),
    deleteById: ctrlWrapper(deleteById),
}