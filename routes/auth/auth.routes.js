const express = require('express');
const router = express.Router();
const registerUser = require('../../controllers/auth/register');
const loggedinUser = require('../../controllers/auth/login');
const logout = require('../../controllers/auth/logout');
const verify = require('../../middleware/authjwt');





router.post('/register', registerUser);

router.post('/login', loggedinUser);

router.get('/logout', logout);


module.exports = router;