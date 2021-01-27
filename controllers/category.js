const Category = require("../models/Category");

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.send(categories);
    } catch (err) {
        res.send(err);
    }
};

exports.getCategory = async (req, res) => {
    try {
        const category = await Category.findOne({ categorySlug: req.params.categorySlug });
        res.send(category);
    } catch (err) {
        res.send(err);
    }
};

exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.send(category);
    } catch (err) {
        res.send(err);
    }
};

exports.updateCategory = (req, res) => {
    try {
        res.send({
            message: "updateCategory"
        })
    } catch (err) {

    }
};

exports.deleteCategory = (req, res) => {
    try {
        res.send({
            message: "deleteCategory"
        })
    } catch (err) {

    }
}