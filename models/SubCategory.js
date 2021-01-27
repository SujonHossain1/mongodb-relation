const { Schema, model } = require('mongoose');

const SubCategorySchema = Schema({
    subCategory: {
        type: String,
        required: true
    },
    subCategoryImage: String,
    subCategorySlug: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: "Category is Required"
    }
});

const SubCategory = model('SubCategory', SubCategorySchema);
module.exports = SubCategory;