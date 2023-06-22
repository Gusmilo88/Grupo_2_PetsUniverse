const {check} = require('express-validator');

module.exports = [

    check('name')
        .notEmpty().withMessage('El nombre del producto es obligatorio').bail()
        .isLength({min:5,max:50}).withMessage('El nombre debe tener entre 5 y 50 caracteres'),
        
    check('description')
        .notEmpty().withMessage('La descripción del producto es requerida').bail()
        .isLength({min:20,max:1500}).withMessage('La descripción debe tener entre 20 y 500 caracteres'),

    check('category')
        .notEmpty().withMessage('¿Y la categoría?'),
        
    check('productType')
        .notEmpty().withMessage('¿Qué tipo de producto es?'),
        
    check('price')
        .notEmpty().withMessage('Debes indicar un precio').bail()
        .isInt({min:1}).withMessage('Solo números positivos'),

    check('discount')
        .notEmpty().withMessage('¿Tiene descuento? Si no tiene poner 0')
        .isInt({min:1}).withMessage('Solo números positivos'),

    // El peso del producto NO es obligatorio

    check('stock')
        .notEmpty().withMessage('¿Tiene stock? Si no tiene poner 0')
        .isInt({min:1}).withMessage('Solo números positivos'),
]