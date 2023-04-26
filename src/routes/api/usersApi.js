const router = require("express").Router();
const { index, detail } = require('../../controllers/api/usersApiController');

/* /api/users */
router
    .get('/',index)
    .get('/:id',detail)


module.exports = router; 