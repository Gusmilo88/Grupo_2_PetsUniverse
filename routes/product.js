var express = require('express');
var router = express.Router();

/* GET home page. */
const {productDetail,productEdit, productCreate} = require('../controllers/productController')


router.get('/productDetail',productDetail) 

router.get('/productCreate',productCreate) 

router.get('/productEdit',productEdit) 

module.exports = router;