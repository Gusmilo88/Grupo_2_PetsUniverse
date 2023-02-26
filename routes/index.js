var express = require('express');
var router = express.Router();

/* GET home page. */
const {index,cart,nosotros} = require('../controllers/indexController')
router.get('/',index) 
router.get('/nosotros',nosotros)
router.get('/cart',cart) 



module.exports = router;
