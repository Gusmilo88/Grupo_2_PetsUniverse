var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

/* GET home page. */
const {productDetail,productEdit, productCreate, update, store, remove,productFilterCats,productFilterDogs, search} = require('../controllers/productController');
const checkUserAdmin = require('../middlewares/checkUserAdmin');

const { uploadCoursesImages } = require('../middlewares/upLoad');
const createValidator = require('../validations/createValidator');
const editValidator = require('../validations/editValidator');


 router.get('/gatos',productFilterCats)
router.get('/perros',productFilterDogs) 
 router.get('/productDetail/:id',productDetail)

router.get('/productCreate/' ,checkUserAdmin ,productCreate)
 router.post('/productCreate',uploadCoursesImages,createValidator, store)   

router.get('/productEdit/:id' ,checkUserAdmin ,productEdit) 
 router.put('/productEdit/:id',uploadCoursesImages,editValidator, update) 

router.delete('/productDelete/:id', remove), 
router.get('/search',search)

module.exports = router;