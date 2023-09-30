const express = require('express');
const router = express.Router();

// Require the controllers
const account_controller = require('./account.controller');

// create a new accounts
router.post('/newAccount', account_controller.new_account);

module.exports = router;
