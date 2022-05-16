const express = require('express');
const router = express.Router();


var token_controller = require('../controllers/token.controller.js');

//  token controller
router.get('/get/', token_controller.GET);

module.exports = router;
