const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");

exports.getSubCategory = async (req, res) => {
    try {
        const subCategories = await Category.findOne({ categorySlug: req.params.categorySlug }).populate("subCategories");
        res.send(subCategories);
    } catch (err) {
        res.send(err);
    }
}

exports.createSubCategory = async (req, res) => {
    try {
        const category = await Category.findOne({ _id: req.params.categoryId });
        const subCategory = await SubCategory.create({ ...req.body, category: category._id });
        category.subCategories.push(subCategory._id);

        await category.save();
        res.send(subCategory);
    } catch (err) {
        res.send(err);
    }
};

exports.updateSubCategory = async (req, res) => {
    try {
        const subCategory = await SubCategory.findOneAndUpdate({ _id: req.params.subCategoryId },
            { $set: req.body },
            { new: true });
        res.send(subCategory);
    } catch (err) {
        res.send(err);
    }
}
