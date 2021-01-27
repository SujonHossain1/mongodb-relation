const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    brand: {
        type: String,
        required: false
    },
    productCode: {
        type: String,
        required: true
    },
    available: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    images: {
        type: [String]
    },
    shortDescription: {
        type: String,

    },
    longDescription: {
        type: String
    },
    ratings: {
        type: Object
    },
    reviews: {
        type: [String]
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, "Category is Required"]
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment",
        }
    ]
}, {
    timestamps: true
});

const Product = model('Product', ProductSchema);
module.exports = Product;
