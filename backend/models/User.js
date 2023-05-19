// Require the necessary packages
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the User model using the user schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;

const newUser = new User({
  username: 'john_doe',
  email: 'john@example.com',
  password: 'password123',
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  address: '123 Main St'
});

newUser.save()
  .then(() => {
    console.log('User created successfully');
  })
  .catch((error) => {
    console.error('Error creating user:', error);
  });
