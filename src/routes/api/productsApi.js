const router = require('express').Router();
const{index,gatos,perros}= require('../../controllers/api/productsApiController')

router.get('/',index)


module.exports = router;