var express = require('express');
var router = express.Router();

/* GET users listing. */
const {login,register, processRegister, processLogin,logout} = require('../controllers/userController');
const { uploadUserImage } = require('../middlewares/upload');
const {loginUserValidator} = require('../validations');
const registerUserValidator = require('../validations/registerUserValidator');
const checkUser = require('../middlewares/checkUser')
const checkLogin = require('../middlewares/checkLogin')
router.get('/login',checkUser, login)
router.post('/login',loginUserValidator,processLogin)
router.get('/register',checkUser, register) 
router.post('/register', uploadUserImage.single("avatar"), registerUserValidator,processRegister)
router.get('/logout',checkLogin,logout)


module.exports = router;
