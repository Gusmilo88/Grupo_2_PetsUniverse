const router = require('express').Router();
const{indexDog,indexCat,gatos,perros,store,destroy,update, detail}= require('../../controllers/api/productsApiController');
const createValidator = require('../../validations/createValidator');

router.get('/perros',indexDog),
router.get('/gatos',indexCat),
router.post('/',createValidator,store)
router.delete('/:id',destroy),
router.put('/:id',update)
router.get('/:id',detail)


module.exports = router;