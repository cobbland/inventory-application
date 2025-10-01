const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');

router.get('/', controller.allUsers);
router.get('/id/:id', controller.oneUser);
router.get('/new', controller.newUser);
router.post('/new', controller.newUserPost);

module.exports = router;