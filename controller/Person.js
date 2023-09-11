const { default: mongoose } = require('mongoose');
const Person = require('../model/Person');

// Create a new person
const createPerson = async (req, res) => {
  try {
    const { name } = req.body;

     // Check if a person with the same name already exists
     const existingPerson = await Person.findOne({ name });

     if (existingPerson) {
       return res.status(400).json({ error: 'Person with the same name already exists' });
     }
    const person = new Person({ name });
    await person.save();
    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a person by name
const getPerson = async (req, res) => {
const { identifier } = req.params

try {
// Check if the identifier is a valid MongoDB ObjectId
if (mongoose.Types.ObjectId.isValid(identifier)) {
// fetch by Id if it is a valid ObjectId
const person = await Person.findById(identifier);
if (!person) {
  return res.status(404).json({ error: 'Person not found' });
}
res.json(person);

} else {
// fetch by name if its not a valid objectId
const person = await Person.findOne({ name: identifier });
if (!person) {
  return res.status(404).json({ error: 'Person not found' });
}
res.json(person);
} 
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a person by name
const updatePerson = async (req, res) => {
const { identifier } = req.params;

  try {

    if (mongoose.Types.ObjectId.isValid(identifier)) {
      // update by Id if it is a valid ObjectId 
    const updatedPerson = await Person.findByIdAndUpdate(
      identifier,
      { name: req.body.name }, // Update the "name" field
      { new: true }
    );
    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json({ message: 'Person updated successfully', person:updatedPerson });
    } 

    else{

      const updatedPerson = await Person.findOneAndUpdate(
        { name: identifier },
        { name: req.body.name }, // Update the "name" field
        { new: true }
      );
      if (!updatedPerson) {
        return res.status(404).json({ error: 'Person not found' });
      }
      res.json({ message: 'Person updated successfully', person:updatedPerson });
      } 
    }
  catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a person by name
const deletePerson = async (req, res) => {
const { identifier } = req.params;


  try {

    // Check if the identifier is a valid MongoDB ObjectId
if (mongoose.Types.ObjectId.isValid(identifier)) {
  // fetch by Id if it is a valid ObjectId
    const deletedPerson = await Person.findByIdAndDelete(identifier);
    if (!deletedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json({ message: 'Person deleted' });
} 

else {

  const deletedPerson = await Person.findOneAndDelete({ name: identifier });
    if (!deletedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json({ message: 'Person deleted' });
}

  }

catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
};
