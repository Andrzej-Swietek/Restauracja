const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/user/:id', userController.getUser);
router.get('/users', userController.getAllUsers);
router.post('/user/register', userController.addUser);
router.delete('/user/:id', userController.deleteUser);
router.put('/user/:id', userController.editUsersCart)

module.exports = router;
