var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

/* GET home page. */
const {productDetail,productEdit, productCreate, productUpdate} = require('../controllers/productController')


router.get('/productDetail/:id',productDetail) 

router.get('/productCreate',productCreate) 

router.get('/productEdit/:id', productEdit) 
router.put('/productEdit/:id', productUpdate)

module.exports = router;