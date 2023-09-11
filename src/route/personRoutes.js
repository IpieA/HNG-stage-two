const express = require('express');
const router = express.Router();
const personController = require('../controller/personController');

// CREATE: Adding a new person
router.post('/', personController.createPerson);

// READ: Fetching details of a person by ID
router.get('/:user_id', personController.getPersonById);

// READ: Fetching details of all persons
router.get('/', personController.getAllPersons);

// UPDATE: Modifying details of an existing person by ID
router.put('/:user_id', personController.updatePerson);

// DELETE: Removing a person by ID
router.delete('/:user_id', personController.deletePerson);

module.exports = router;