const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
    category: {
        type: String,
        required: true,
    },
    categoryImage: {
        type: String,
        required: true
    },
    categorySlug: String,
    subCategories: [
        {
            type: Schema.Types.ObjectId,
            ref: "SubCategory"
        }
    ],
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
});

const Category = model("Category", CategorySchema);
module.exports = Category;