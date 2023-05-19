const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const router = express.Router();

// Register a new user
router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').trim().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  authController.register
);

// User login
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').trim().notEmpty().withMessage('Password is required'),
  ],
  authController.login
);

module.exports = router;
