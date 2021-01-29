const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: 'String',
        trim: true,
    },
    address: {
        type: String,
        require: true,
    }
}, {
    timestamps: true
});


UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

UserSchema.methods.getToken = function () {
    return jwt.sign({ _id: this._id, type: 'user' }, "hitheremynameissujonhossainiamadeveloper")
}

const User = model('User', UserSchema);
module.exports = User;