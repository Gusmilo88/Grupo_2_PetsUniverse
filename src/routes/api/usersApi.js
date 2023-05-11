const router = require("express").Router();
const { index, detail ,verifyUseruniverse, verifyEmail} = require('../../controllers/api/usersApiController');
const {loginUserValidator} = require('../../validations');
/* /api/users */
router
    .get('/',index)
    .get('/:id',detail)
    .post('/verify-user' ,loginUserValidator ,verifyUseruniverse)
    .post("/verify-email",verifyEmail)


module.exports = router; 