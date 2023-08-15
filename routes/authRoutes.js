const express = require('express');
const router = express.Router();

const { login, logout } = require('../controllers/authController');

router.get('/login', login);
router.get('/logout', logout);

module.exports = router;
