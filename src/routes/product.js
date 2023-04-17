var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

/* GET home page. */
const {productDetail,productEdit, productCreate, productUpdate, store, destroy,productFilterCats,productFilterDogs, search} = require('../controllers/productController');
const checkUserAdmin = require('../middlewares/checkUserAdmin');

router.get('/gatos',productFilterCats)
router.get('/perros',productFilterDogs)
router.get('/productDetail/:id',productDetail) 

router.get('/productCreate/',/* checkUserAdmin */productCreate)
router.post('/productCreate', store)  

router.get('/productEdit/:id',/* checkUserAdmin,  */productEdit) 
router.put('/productEdit/:id', productUpdate)

router.delete('/productDelete/:id', destroy), 
router.get('/search',search)

module.exports = router;