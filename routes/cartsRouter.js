const express = require('express');
const router = express.Router();
const controller = require('../controllers/cartsController');

router.get('/', controller.allCarts);
router.get('/new', controller.newCart)

module.exports = router;