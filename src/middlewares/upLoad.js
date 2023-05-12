/* const multer = require('multer');
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
} */

const multer = require("multer");
const path = require("path");

const whitelist = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

const storageCourseImages = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "public/images/products");
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_products_${path.extname(file.originalname)}`);
    },
});

const configUploadCoursesImages = multer({
    storage: storageCourseImages,
    limits: {
        files: 1,
    },
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp|JPG)$/)) {
            req.fileValidationError = "Solo se admiten imágenes jpg, jpeg, png, gif, webp";
            return cb(null, false, req.fileValidationError);
        }

        cb(null, true);
    },
});

const uploadCoursesImages = (req, res, next) => {
    const upload = configUploadCoursesImages.single("images");

    upload(req, res, function (error) {
        if (error) {
            req.fileValidationError = "No más de 1 imagen";
        }
        next();
    });
};

const storageUserImage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "public/images/users");
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_users_${path.extname(file.originalname)}`);
    },
});

const uploadUserImage = multer({
    storage: storageUserImage,
    
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
            req.fileValidationError = "Solo se permite imágenes ";
            return cb(null, false, req.fileValidationError);
        }

        cb(null, true);
    },
});


module.exports = {
    uploadCoursesImages,
    uploadUserImage,
};
