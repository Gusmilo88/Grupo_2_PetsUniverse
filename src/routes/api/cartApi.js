const router = require('express').Router();
const{ getOrderPending, addProduct, removeProduct, moreQuantity, lessQuantity, clearCart, statusOrder }= require('../../controllers/api/cartApiController');
const createValidator = require('../../validations/createValidator');

router.get('/getOrderPending',getOrderPending),
router.post('/addProduct',addProduct),
router.delete('/removeProduct',removeProduct),
router.put('/moreQuantity',moreQuantity),
router.put('/lessQuantity',lessQuantity),
router.delete('/clearCart',clearCart),
router.put('/statusOrde',statusOrder)




module.exports = router;