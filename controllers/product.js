const Category = require("../models/Category");
const Product = require("../models/Product")

exports.createProduct = async (req, res, next) => {
    try {

        const category = await Category.findOne({ _id: req.params.categoryId });
        const product = await Product.create({ ...req.body, category: category._id });

        category.products.push(product._id);
        await category.save();
        res.send(product);
    } catch (err) {
        res.send(err)
    }
};

exports.getProducts = async (req, res, next) => {
    try {
        const products = await Category.findOne({ categorySlug: req.params.categorySlug }).populate("products");
        res.send(products);
    } catch (err) {
        res.send(err);
    }

}