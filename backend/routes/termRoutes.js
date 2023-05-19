const express = require('express');
const router = express.Router();

const Term = require('./models/Term');

// GET /terms - Get all terms
router.get('/terms', async (req, res) => {
  try {
    const terms = await Term.find();
    res.json(terms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST /terms - Create a new term
router.post('/terms', async (req, res) => {
  try {
    const { title, definition } = req.body;

    // Create a new term instance
    const newTerm = new Term({
      title,
      definition,
    });

    // Save the term to the database
    const term = await newTerm.save();

    res.status(201).json(term);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// PUT /terms/:id - Update a term
router.put('/terms/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, definition } = req.body;

    const term = await Term.findByIdAndUpdate(
      id,
      { title, definition },
      { new: true }
    );

    if (!term) {
      return res.status(404).json({ message: 'Term not found' });
    }

    res.json(term);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// DELETE /terms/:id - Delete a term
router.delete('/terms/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const term = await Term.findByIdAndRemove(id);

    if (!term) {
      return res.status(404).json({ message: 'Term not found' });
    }

    res.json({ message: 'Term deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

