var express = require('express');
var router = express.Router();

/* GET users listing. */
const {login,register, processRegister} = require('../controllers/userController');
const { uploadUserImage } = require('../middlewares/upload');
const registerUserValidator = require('../validations/registerUserValidator');

router.get('/login', login) 
router.get('/register', register) 
router.post('/register', uploadUserImage.single("avatar"), registerUserValidator,processRegister)


module.exports = router;
