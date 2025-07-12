const express = require('express');
const router = express.Router();
const authToken=require('../middleware/auth.middleware');

const authController = require('../controllers/auth.controller');

router.post('/register',authController.signup);
router.post('/login',authController.login);

router.get('/profile',authToken.verifyToken,authController.profile);

module.exports = router;