const express = require('express');
const router = express.Router();
const controller = require('../controllers/cartsController');

router.get('/', controller);

module.exports = router;