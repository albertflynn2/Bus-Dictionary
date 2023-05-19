const Term = require('../models/term');

// Handle GET request for all terms
exports.getAllTerms = async (req, res) => {
  try {
    const terms = await Term.find();
    res.json(terms);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve terms' });
  }
};

// Handle POST request to create a new term
exports.createTerm = async (req, res) => {
  const { term, definition } = req.body;
  
  try {
    const newTerm = await Term.create({ term, definition });
    res.status(201).json(newTerm);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create term' });
  }
};

// Handle GET request for a specific term by ID
exports.getTermById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const term = await Term.findById(id);
    if (!term) {
      return res.status(404).json({ error: 'Term not found' });
    }
    res.json(term);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve term' });
  }
};

// Handle PUT request to update a term by ID
exports.updateTermById = async (req, res) => {
  const { id } = req.params;
  const { term, definition } = req.body;
  
  try {
    const updatedTerm = await Term.findByIdAndUpdate(
      id,
      { term, definition },
      { new: true }
    );
    if (!updatedTerm) {
      return res.status(404).json({ error: 'Term not found' });
    }
    res.json(updatedTerm);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update term' });
  }
};

// Handle DELETE request to delete a term by ID
exports.deleteTermById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const deletedTerm = await Term.findByIdAndDelete(id);
    if (!deletedTerm) {
      return res.status(404).json({ error: 'Term not found' });
    }
    res.json({ message: 'Term deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete term' });
  }
};
