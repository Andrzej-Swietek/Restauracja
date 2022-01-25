const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const {authenticateToken} = require("../authenticateToken");


router.get('/product/:id', authenticateToken, productController.getProduct);
router.get('/products',productController.getAllProducts);
router.put('/product/edit', productController.editProduct);
router.delete('/product/delete/:id', productController.deleteProduct);

module.exports = router;
