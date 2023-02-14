var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

/* GET home page. */
const {productDetail,productEdit, productCreate, productUpdate, store,productFilter} = require('../controllers/productController')

router.get('/',productFilter)
router.get('/productDetail/:id',productDetail) 

router.get('/productCreate/',productCreate)
router.post('/productCreate', store) 

router.get('/productEdit/:id', productEdit) 
router.put('/productEdit/:id', productUpdate)

router.delete('/delete/:id', productController.destroy); 

module.exports = router;