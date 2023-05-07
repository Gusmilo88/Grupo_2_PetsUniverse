const router = require("express").Router();
const { index, detail ,verifyUseruniverse} = require('../../controllers/api/usersApiController');
const {loginUserValidator} = require('../../validations');
/* /api/users */
router
    .get('/',index)
    .get('/:id',detail)
    .post('/verify-user' ,loginUserValidator ,verifyUseruniverse)


module.exports = router; 