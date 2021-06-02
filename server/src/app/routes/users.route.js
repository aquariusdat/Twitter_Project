const express = require('express');
const UserController = require('../controllers/users.controller');
const router = express.Router();

router.get('/', UserController.getUser)
router.post('/', UserController.postUser);

module.exports = router;