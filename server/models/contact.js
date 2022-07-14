const { model, Schema } = require('mongoose');

const contactSchema = new Schema({
  name: String,
  phone: String,
  email: String,
  birthday: Date,
  gender: String,
  type: String
})

const Contact = model('Contact', contactSchema);

module.exports = Contact;