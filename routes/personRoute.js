const express = require('express');
const router = express.Router();
const {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
} = require('../controller/Person');

// Create a new person
router.post('/', createPerson);

// Get a person by name
router.get('/:identifier', getPerson);

// Update a person by name
router.put('/:identifier', updatePerson);

// Delete a person by name
router.delete('/:identifier', deletePerson);

module.exports = router;
