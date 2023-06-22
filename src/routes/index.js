var express = require('express');
const indexController = require('../controllers/indexController');
const checkLogin = require("../middlewares/checkLogin")
var router = express.Router();

/* GET home page. */
const {index,cart,nosotros,dashboard} = require('../controllers/indexController');
const checkUserAdmin = require('../middlewares/checkUserAdmin');
router.get('/',index) 
router.get('/nosotros',nosotros)
router.get('/cart', checkLogin,cart) 
router.get('/search', indexController.search); 
router.get('/admin', checkUserAdmin,dashboard)




module.exports = router;
