const { check } = require('express-validator');
const User = require('../models/User');

const registrationValidator = [
    check('name')
        .not().isEmpty().withMessage('Please enter your name')
        .trim(),

    check('phone')
        .not().isEmpty().withMessage('Phone number required')
        .isNumeric().withMessage('Please provide a valid phone number')
        .custom(async (phone) => {
            let customer = await User.findOne({ phone })
            if (customer) { throw new Error('Phone number already in use') }
            return true
        })
        .trim(),

    check('password')
        .not().isEmpty().withMessage('Please Enter Your Password')
        .isLength({ min: 5 }).withMessage('must be at least 5 chars long')
        .matches(/\d/).withMessage('must contain a number'),

    check('confirmPassword')
        .not().isEmpty().withMessage('Please Enter Your Confirm Password')
        .custom((confirmPassword, { req }) => {
            if (confirmPassword !== req.body.password) {
                throw new Error('Password does not match')
            }
            return true
        }),


    check('address')
        .not().isEmpty().withMessage('Must enter your address')
        .trim(),
];

module.exports = registrationValidator;