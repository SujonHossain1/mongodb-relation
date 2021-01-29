const User = require('../models/User');
const { validationResult } = require('express-validator');
const { errorFormatter } = require('../utils/errorFormatter');
const bcrypt = require('bcryptjs');

exports.registration = async (req, res, next) => {
    try {
        const errors = validationResult(req).formatWith(errorFormatter)
        if (!errors.isEmpty()) {
            return res.status(422).json(errors.mapped());
        };
        await User.create(req.body);
        res.send({
            message: 'Registration Successfully'
        });

    } catch (err) {
        res.send(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const errors = validationResult(req).formatWith(errorFormatter);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.mapped());
        }
        const user = await User.findOne({ email });
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).send({ message: "Password Incorrect" });
        const token = user.getToken();
        res.header('Authorization', token).status(200).send({ token });

    } catch (err) {
        res.status(500).send(err);
    }
}