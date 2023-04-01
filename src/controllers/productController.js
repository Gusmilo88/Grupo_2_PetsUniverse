const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const writeJson = (data = {}) =>fs.writeFileSync(path.join(__dirname, "../data/queries.json"),JSON.stringify(data),"utf-8");
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
        const {name, description, price, discount, image, weight, category, productType, stock} = req.body;

        const productModified = {
            id : +id,
			name : name.trim(),
			description : description.trim(),
			price : +price,
			discount : +discount,
			image : product.image,
      weight : +weight,
			category : category ? "perros" : "perros" || category ? "gatos" : "gatos",
      productType : productType ? "alimento" : "alimento" || productType ? "juguetes" : "juguetes" || productType ? "salud" : "salud",
      stock : +stock,
		}

        const productsModified = products.map(product => {
            if(product.id === +id){
                return productModified
            }
            return product;
        })

        fs.writeFileSync(productsFilePath, JSON.stringify(productsModified, null, 3), "utf-8");
        return res.redirect("/products/productDetail/" + id)

        
    },

    productCreate: (req,res)=>{
        return res.render('productCreate')
    },

    store: (req, res) => {
      const mil = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const {name, discount, price, description, category, weight, productType, stock, image} = req.body;

        const newProduct = {
            id : products[products.length - 1].id + 1,
            name : name.trim(),
            description : description.trim(),
            price : +price,
            discount : +discount,
            image : null,
            weight : +weight,
            productType : productType ? "alimento" : "alimento" || productType ? "juguetes" : "juguetes" || productType ? "salud" : "salud",
            category : category ? "perros" : "perros" || category ? "gatos" : "gatos",
            stock : +stock,
            mil
            
        }
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 3), 'utf-8')

        return res.redirect('/')
    },

    productFilterCats: (req,res)=>{

        if (!req.query.price  && !req.query.productType) {
			writeJson();
		  }

          let queries = require("../data/queries.json");
	  
		  writeJson({ ...queries, ...req.query });
	  
		  const { price, category,productType } = { ...queries, ...req.query } 
     
      ProductsCat = products.filter((product) => {
			  return product.category === "gatos";
			})

		  let allProducts = ProductsCat;

      

          if (price) {
			// ordenar por el precio
			if (price === "min") {
			  allProducts = allProducts.sort((before, after) => {
				return before.price - after.price;
			  });
			} else {
			  allProducts = allProducts.sort((before, after) => {
				return after.price - before.price;
			  });
			}
		  }

           if (productType) {
			allProducts = allProducts.filter((product) => {
			  return product.productType === productType;
			});
		  }





        return res.render('productsCats',{
            products:allProducts,
            queries: { ...queries, ...req.query }
        })
    },

    productFilterDogs: (req,res)=>{

      if (!req.query.price  && !req.query.productType) {
    writeJson();
    }

        let queries = require("../data/queries.json");
  
    writeJson({ ...queries, ...req.query });
  
    const { price, category,productType } = { ...queries, ...req.query } 
   
    ProductsCat = products.filter((product) => {
      return product.category === "perros";
    })

    let allProducts = ProductsCat;

    

        if (price) {
    // ordenar por el precio
    if (price === "min") {
      allProducts = allProducts.sort((before, after) => {
      return before.price - after.price;
      });
    } else {
      allProducts = allProducts.sort((before, after) => {
      return after.price - before.price;
      });
    }
    }

         if (productType) {
    allProducts = allProducts.filter((product) => {
      return product.productType === productType;
    });
    }





      return res.render('productsDogs',{
          products:allProducts,
          queries: { ...queries, ...req.query }
      })
  },

    
    destroy : (req, res) => {
		// Do the magic
		const {id} = req.params;
		const productsModified = products.filter(product => product.id !== + id)
		fs.writeFileSync(productsFilePath, JSON.stringify(productsModified, null, 3), "utf-8");
		return res.redirect("/")
	}
}



