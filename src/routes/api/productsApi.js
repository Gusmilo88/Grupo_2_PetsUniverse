const router = require('express').Router();
const{index,gatos,perros,store,destroy,update}= require('../../controllers/api/productsApiController');
const createValidator = require('../../validations/createValidator');

router.get('/',index),
router.post('/',createValidator,store)
router.delete('/:id',destroy),
router.put('/:id',update)



module.exports = router;