const router = require('express').Router();
const contactController = require('./controllers/contact')

router.get('/contacts', contactController.getAllContacts);
router.post('/contacts', contactController.postContact);
router.delete('/contacts/:contactId', contactController.deleteContact);

module.exports = router;