const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/user/:id', userController.getUser);
router.get('/users', userController.getAllUsers);
router.post('/user/register', userController.addUser);
router.post('/user/login', userController.login);
router.delete('/user/:id', userController.deleteUser);
router.put('/user/addToCartHistory', userController.editUsersCart);
router.put('/user/ban', userController.banUser);
router.put('/user/changeRole', userController.changeRole);

module.exports = router;
