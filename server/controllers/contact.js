const Contact = require('../models/contact');

async function getAllContacts (req, res) {
  try {
    const contacts = await Contact.find()
    res.status(200);
    res.send(contacts);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

async function postContact (req, res) {
  try {
    const contact = req.body;
    const result = await Contact.create(contact);
    res.status(201);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


async function deleteContact (req, res) {
  try {
    const id = req.params.contactId;
    const result = await Contact.findByIdAndDelete(id);
    res.status(200);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

module.exports = {
  getAllContacts,
  postContact,
  deleteContact
}