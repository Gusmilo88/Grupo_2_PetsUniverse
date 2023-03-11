const multer = require('multer');
const path = require("path");

const userPerfilImage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "public/images/users")
    },

    filename : function (req, file, cb){
        cb(null, `${Date.now()}_users_${path.extname(file.originalname)}`)
    }
})

const uploadUserImage = multer({
    storage : userPerfilImage
})

module.exports = {
    uploadUserImage
}