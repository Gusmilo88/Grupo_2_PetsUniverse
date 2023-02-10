var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

/* GET home page. */
const {productDetail,productEdit, productCreate, productUpdate} = require('../controllers/productController')


router.get('/productDetail',productDetail) 

router.get('/productCreate',productCreate) 

router.get('/productEdit/:id', productEdit) 
// router.put('/products/:id', productUpdate)

module.exports = router;