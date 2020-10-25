const express = require('express');
const router = express.Router();
const product = require('../../controllers/productController');

router.post('/products', product.test);
router.post('/createProduct', product.createProduct);
router.post('/getall', product.fatchProduct);
router.get('/:productId', product.showProduct);
router.post('/update', product.updateProduct);
router.post('/delete', product.deleteProduct);

// Export the Router
module.exports = router;