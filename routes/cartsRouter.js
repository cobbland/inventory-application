const express = require('express');
const router = express.Router();
const controller = require('../controllers/cartsController');

router.get('/', controller.allCarts);
router.get('/id/:cartID', controller.oneCart);
router.get('/:field/:fieldData', controller.someCarts);
router.get('/new', controller.newCart)
router.post('/new', controller.newCartPost)

module.exports = router;