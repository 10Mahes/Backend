const express = require('express');
const router = express.Router();
const {getProduct, getProductById, addProduct, updateProduct, deleteProduct} = require('../controller/product.controller.js');


router.get('/',getProduct);
router.get('/:id',getProductById);

router.post('/',addProduct);

router.put('/:id',updateProduct);

router.delete('/:id',deleteProduct)

module.exports = router;