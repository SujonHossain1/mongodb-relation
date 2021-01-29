const { check } = require('express-validator');
const User = require('../models/User');

const loginValidator = [
    check('email')
        .not().isEmpty().withMessage('Email is required.')
        .matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        .withMessage('Please Enter Valid Email.')
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (!user) throw new Error('Invalid Email');
            return true;
        })
        .trim(),

    check('password')
        .not().isEmpty().withMessage('Password is required.')
        .isLength({ min: 5 }).withMessage('Password is short')

];

module.exports = loginValidator;