const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/product/:id', productController.getProduct);
router.get('/products',productController.getAllProducts);
router.post('/product/edit', productController.editProduct);
router.delete('/product/:id', productController.deleteProduct);

module.exports = router;
