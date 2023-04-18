const {check} = require('express-validator');

module.exports = [

    check('name')
        .notEmpty().withMessage('El título del curso es obligatorio').bail()
        .isLength({min:5,max:50}).withMessage('El título debe tener entre 5 y 50 caracteres'),
        check('category')
        .notEmpty().withMessage('¿Y la categoría???'),
        check('productType')
        .notEmpty().withMessage('¿Y la categoría???'),
        

    check('price')
        .notEmpty().withMessage('Debes indicar un precio').bail()
        .isInt({min:1}).withMessage('Solo números positivos'),

    check('discount')
        .notEmpty().withMessage('¿Quién es el chef?')
        .isInt({min:1}).withMessage('Solo números positivos'),

   
        check('stock')
        .notEmpty().withMessage('¿Y la categoría???')
        .isInt({min:1}).withMessage('Solo números positivos'),

    check('description')
        .notEmpty().withMessage('La descripción del curso es requerida').bail()
        .isLength({min:20,max:500}).withMessage('La descripción debe tener entre 20 y 500 caracteres'),
    
]