const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


module.exports = {

    productDetail: (req,res)=>{
        return res.render('productDetail')
    },

    productEdit: (req,res) => {
        const {id} = req.params;
        const product = products.find(product => product.id === +id);

        return res.render("productEdit", {
            ...product,
        })
    },

    productUpdate: (req, res) => {
        const {name, discount, price, description, category} = req.body;
    },

    productCreate: (req,res)=>{
        return res.render('productCreate')
    },
}