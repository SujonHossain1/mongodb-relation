const router = require('express').Router();
const { createProduct, getProducts } = require('../controllers/product');

router.get('/:categorySlug', getProducts);
router.post('/:categoryId', createProduct);


module.exports = router;