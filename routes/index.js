var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
const {index,cart,nosotros} = require('../controllers/indexController')
router.get('/',index) 
router.get('/nosotros',nosotros)
router.get('/cart',cart) 
router.get('/search', indexController.search); 



module.exports = router;
