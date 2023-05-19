const express = require('express');
const connectDB = require('./config/database');
// Other imports and middleware

const app = express();

// Connect to the database
connectDB();

// Other app configurations and routes

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
