const router = require('express').Router();
const { registration, login } = require('../controllers/user');
const loginValidator = require('../validators/login');
const registrationValidator = require('../validators/registration');


router.post('/registration', registrationValidator, registration);
router.post('/login', loginValidator, login);

module.exports = router;