var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

/* GET home page. */
const {productDetail,productEdit, productCreate, productUpdate, store,productFilter, destroy} = require('../controllers/productController')

router.get('/',productFilter)
router.get('/productDetail/:id',productDetail) 

router.get('/productCreate/',productCreate)
router.post('/productCreate', store) 

router.get('/productEdit/:id', productEdit) 
router.put('/productEdit/:id', productUpdate)

router.delete('/productDelete/:id', destroy), function (req, res){
    res.send("hola")
}; 

module.exports = router;