const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
module.exports = {

    productDetail: (req, res) => {
		
        const {id}= req.params; 
		const product = products.find(product => product.id === +id);
        const mil = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");	
        return res.render('productDetail',{
            ...product,
            products,        
            mil		
		})
	},

    productEdit: (req,res) => {
        const {id} = req.params;
        const product = products.find(product => product.id === +id);

        return res.render("productEdit", {
            ...product,
        })
    },

    productUpdate: (req, res) => {
        const {id} = req.params
        const product = products.find(product => product.id === +id);
        const {name, description, price, discount, image, weight, category, productTipe, stock} = req.body;

        const productModified = {
            id : +id,
			name : name.trim(),
			description : description.trim(),
			price : +price,
			discount : +discount,
			image : product.image,
            weight : +weight,
			category,
            productTipe,
            stock : +stock,
		}

        const productsModified = products.map(product => {
            if(product.id === +id){
                return productModified
            }
            return product;
        })

        fs.writeFileSync(productsFilePath, JSON.stringify(productsModified, null, 3), "utf-8");
        return res.redirect("/products/productCreate/:id")

    },

    productCreate: (req,res)=>{
        return res.render('productCreate')
    },
}