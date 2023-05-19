const mongoose = require('mongoose');

// Define the Term schema
const termSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Term model
const Term = mongoose.model('Term', termSchema);

module.exports = Term;

