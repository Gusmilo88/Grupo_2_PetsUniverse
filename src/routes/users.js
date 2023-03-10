var express = require('express');
var router = express.Router();

/* GET users listing. */
const {login,register} = require('../controllers/userController');
const { uploadUserImage } = require('../middlewares/upload');

router.get('/login', login) 
router.get('/register', register) 
router.post('/register', uploadUserImage.single("fotoPerfil"), register)


module.exports = router;
