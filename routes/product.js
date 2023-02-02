var express = require('express');
var router = express.Router();

/* GET home page. */
const {productDetail,productEdit} = require('../controllers/productController')


router.get('/productDetail',productDetail) 

router.get('/productEdit',productEdit) 


module.exports = router;