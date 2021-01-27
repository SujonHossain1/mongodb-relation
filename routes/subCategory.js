const router = require('express').Router();
const {
    getSubCategory,
    createSubCategory,
    updateSubCategory
} = require('../controllers/subCategory');


router.get('/:categorySlug', getSubCategory);
router.post('/:categoryId', createSubCategory);
router.put('/:subCategoryId', updateSubCategory);

module.exports = router;