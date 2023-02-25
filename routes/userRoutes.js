// This file handles all reoutes related to user(login, registration, ...)

const { Router } = require('express');
const userController = require('./../controllers/userController');

const router = Router();

// get all users (testing purposes)
router.get('/getallusers', userController.getAllUsers);



module.exports = router;