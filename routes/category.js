const router = require('express').Router();
const {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/category');
const { getSubCategory } = require('../controllers/subCategory');


router.get('/', getCategories);
router.post('/', createCategory);
router.get('/:categorySlug', getSubCategory);
router.put('/:categoryId', updateCategory);
router.delete('/:categoryId', deleteCategory);


module.exports = router