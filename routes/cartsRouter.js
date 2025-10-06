const express = require('express');
const router = express.Router();
const controller = require('../controllers/cartsController');

router.get('/', controller.allCarts);
router.get('/id/:cartID', controller.oneCart);
router.get('/id/:cartID/edit', controller.editCart);
router.post('/id/:cartID/edit', controller.editCartPost);
router.get('/id/:cartID/delete', controller.deleteCart);
router.get('/:field/:fieldData', controller.someCarts);
router.get('/new', controller.newCart);
router.post('/new', controller.newCartPost);
router.get('/id/:cartID/add-cart-to-user', controller.addCartToUser);
router.post('/id/:cartID/add-cart-to-user', controller.postCartToUser);

module.exports = router;