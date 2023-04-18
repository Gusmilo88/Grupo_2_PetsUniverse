const fs = require('fs');
const path = require('path');
const db = require("../database/models");
const { promise } = require('bcrypt/promises');
const { redirect } = require('express/lib/response');
const { title } = require('process');


/* const productsFilePath = path.join(__dirname, '../data/products.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */

 const writeJson = (data = {}) =>fs.writeFileSync(path.join(__dirname, "../data/queries.json"),JSON.stringify(data),"utf-8"); 
module.exports = {


 /*  productFilterCats: (req, res) => {
    db.Product.findAll({
      where: {
        visible: true,
      },
      include: ["images"],
    })
      .then((products) => {
        return res.render("/gatos", {
          title: "Lista de productos",
          products,
        });
      })
      .catch((error) => console.log(error));
  }, */

  productFilterDogs: (req, res) => {
    db.Product.findAll({
      where: {
        visible: true,
      },
      include: ["images"],
    })
      .then((products) => {
        return res.render("/perros", {
          title: "Lista de productos",
          products,
        });
      })
      .catch((error) => console.log(error));
  },

  productDetail: (req, res) => {
    const { id } = req.params;
    const mil = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const productsId = db.Product.findByPk(id,{
      include : [
        {
          association : 'categories',
          attributes : ['name']
        },
        {
          association : 'productTypes',
          attributes : ['name']
        },]
    })
    const products = db.Product.findAll()
    Promise.all(([productsId, products]))
      .then(([productsId, products]) => {
        return res.render('productDetail', {
          title: "Detalle del producto",
          ...productsId.dataValues,
          products,
          mil,
        });
      })
      .catch(error => console.log(error))
  },

productCreate: (req,res)=>{
   const productoTipo = db.ProductType.findAll({
   
    attributes: ["name", "id"],
  }); 
 
  const categories = db.Category.findAll({
   
    attributes: ["name", "id"],
  });

  Promise.all([ productoTipo, categories])
    .then(([productoTipo, categories]) => {
      return res.render("productCreate", {
        productoTipo,
        categories,
      });
    })
    .catch((error) => console.log(error));
},

productEdit: function(req,res) {

  const { id } = req.params;
  const producto = db.Product.findByPk(id,

    {
      include : [
        {
          association : 'categories',
          attributes : ['name']
        },
        {
          association : 'productTypes',
          attributes : ['name']
        },]
    }
    
    
    )
  
  Promise.all(([ producto]))
  
  .then(([ producto])=>{
    return res.render("productEdit",{
      ...producto.dataValues
    })
  }).catch(error => console.log(error))
},

productUpdate: (req, res) => {
    db.petsuniverse.update(
      {
        ...req.body
      },
      {
        where : {
          id : req.params.id
        }
      }
    ).then(() => res.redirect("/products/productDetail/" + req.params.id))
     .catch(error => console.log(error))
},

destroy : (req, res) => {
  db.petsuniverse.destroy(
    {
      where : {
        id : req.params.id
      }
    }
  ).then(() => res.redirect("/products"))
   .catch(error => console.log(error))
},
  
search : (req,res) => {
  return res.render('courses/results',{
    courses : []
  })
},


productFilterCats: (req,res)=>{

  if (!req.query.price  && !req.query.productType) {
writeJson();
}
  let queries = require("../data/queries.json");

writeJson({ ...queries, ...req.query });

const { price, category,productType } = { ...queries, ...req.query }  

ProductsCat  = db.Product.findAll({
  where:{

      categoryId:2
      
      
  }
})

Promise.all([ ProductsCat])


.then(([ ProductsCat]) => {
  return res.render("productsCats",{
    products:ProductsCat,
    queries: { ...queries, ...req.query }
  });
})
.catch((error) => console.log(error));




/* et allProducts = ProductsCat;

     if (price) {
// ordenar por el precio
if (price === "min") {
  allProducts = db.Product.findAll({
    order: [
      ["population", "DESC"],
     
    ],
  })
} 

if (price === "max") {
  allProducts = db.Product.findAll({
    order: [
      ["price", "ASC"],
     
    ],
  })
} 
} 

     if (productType) {
allProducts = db.Product.findAll({
  where:{

      productTypeId:productType
      
      
  }
})
}

return res.render('productsCats',{
  products:allProducts,
  queries: { ...queries, ...req.query }
}) */
},


productFilterDogs: (req,res)=>{

  if (!req.query.price  && !req.query.productType) {
writeJson();
}
  let queries = require("../data/queries.json");

writeJson({ ...queries, ...req.query });

const { price, category,productType } = { ...queries, ...req.query }  

ProductsDog  = db.Product.findAll({
  where:{

      categoryId:1
      
      
  }
})

Promise.all([ ProductsDog])


.then(([ ProductsDog]) => {
  return res.render("productsDogs",{
    products:ProductsDog,
    queries: { ...queries, ...req.query }
  });
})
.catch((error) => console.log(error));




/* et allProducts = ProductsCat;

     if (price) {
// ordenar por el precio
if (price === "min") {
  allProducts = db.Product.findAll({
    order: [
      ["price", "DESC"],
     
    ],
  })
} 

if (price === "max") {
  allProducts = db.Product.findAll({
    order: [
      ["price", "ASC"],
     
    ],
  })
} 
} 

     if (productType) {
allProducts = db.Product.findAll({
  where:{

      productTypeId:productType
      
      
  }
})
}

return res.render('productsCats',{
  products:allProducts,
  queries: { ...queries, ...req.query }
}) */
}

};

/* productFilterCats: (req,res)=>{

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
} */






/*     productFilterDogs: (req,res)=>{

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
  }, */

  /*   productCreate: (req,res)=>{
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
}, */

/* productEdit: (req,res) => {
  const {id} = req.params;
  const product = products.find(product => product.id === +id);

  return res.render("productEdit", {
      ...product,
  })
}, */

/* productUpdate: (req, res) => {
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
}, */

/* destroy : (req, res) => {
  // Do the magic
  const {id} = req.params;
  const productsModified = products.filter(product => product.id !== + id)
  fs.writeFileSync(productsFilePath, JSON.stringify(productsModified, null, 3), "utf-8");
  return res.redirect("/")
}, */

/* productDetail: (req, res) => {
		
  const {id}= req.params; 
const product = products.find(product => product.id === +id);
  const mil = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");	
  return res.render('productDetail',{
      ...product,
      products,        
      mil		
})
}; */