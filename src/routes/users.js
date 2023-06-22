var express = require('express');
var router = express.Router();

/* GET users listing. */
const {login,register, processRegister, processLogin,logout,profile} = require('../controllers/userController');
const { uploadUserImage } = require('../middlewares/upLoad');
const {loginUserValidator} = require('../validations');
const registerUserValidator = require('../validations/registerUserValidator');
const checkUser = require('../middlewares/checkUser')
const checkLogin = require('../middlewares/checkLogin')

/* /users */
router.get('/login',checkUser, login)
router.post('/login',loginUserValidator,processLogin)
router.get('/register',checkUser, register) 
router.post('/register', uploadUserImage.single("avatar"), registerUserValidator,processRegister)
router.get('/logout',checkLogin,logout);
router.get('/profile'/* ,checkLogin */,profile);
router.post('/profile'/* ,checkLogin */,profile);



module.exports = router;
