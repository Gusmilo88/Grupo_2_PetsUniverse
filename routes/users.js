var express = require('express');
var router = express.Router();

/* GET users listing. */
const {login,register} = require('../controllers/userController')

router.get('/login', login) 
router.get('/register', register) 

module.exports = router;
