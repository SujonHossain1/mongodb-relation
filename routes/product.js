const router = require('express').Router();
const { createProduct } = require('../controllers/product');


router.post('/:categoryId', createProduct);

module.exports = router;