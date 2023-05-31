const fs = require('fs');
const path = require('path');
const db = require("../database/models");
const { promise } = require('bcrypt/promises');
const { redirect } = require('express/lib/response');
const { title } = require('process');
const {validationResult} = require("express-validator");
const { error } = require('console');


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

  /* productFilterDogs: (req, res) => {
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
  }, */

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

      const productoTypes = db.ProductType.findAll({
   
    attributes: ["name", "id"],
  }); 
 
  const categories = db.Category.findAll({
   
    attributes: ["name", "id"],
  });

  
  
  Promise.all(([ producto,categories, productoTypes]))
  
  .then(([ producto,categories, productoTypes])=>{
    return res.render("productEdit",{
      ...producto.dataValues,
      categories,
      productoTypes
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

const { price,productType } = { ...queries, ...req.query }  

let allProducts =ProductsCat  = db.Product.findAll({
  where:{

      categoryId:2
      
      
  }
})



allProducts =ProductsCat
 


  // ordenar por el precio
  if (price === "min") {
    allProducts = db.Product.findAll({
      where:{

        categoryId:2
        
        
    },
      order: [
        ['price','asc'],
       
      ],
    })
  }


  if (price === "max") {
    allProducts = db.Product.findAll({
      where:{

        categoryId:2
        
        
    },
      order: [
        ['price','desc'],
       
      ],
    })
  } 


  
  
       if (productType) {
  allProducts = db.Product.findAll({
    where:{
      categoryId:2,
        productTypeId:productType
        
        
    }
  })
  }

Promise.all([ allProducts])


.then(([ allProducts]) => {
  return res.render("productsCats",{
    products:allProducts,
    queries: { ...queries, ...req.query }
  });
})
.catch((error) => console.log(error));









},


productFilterDogs: (req,res)=>{

  if (!req.query.price  && !req.query.productType) {
    writeJson();
    }
      let queries = require("../data/queries.json");
    
    writeJson({ ...queries, ...req.query });
    
    const { price,productType } = { ...queries, ...req.query }  
    
    ProductsDog  = db.Product.findAll({
      where:{
    
          categoryId:1
          
          
      }
    })
    
    
    
    let allProducts =ProductsDog
     
    
    if(price){
      // ordenar por el precio
      if (price === "min") {
        allProducts = db.Product.findAll({
          where:{
    
            categoryId:1
            
            
        },
          order: [
            ['price', 'asc'],
           
          ],
        })
      } else
      
      {
        allProducts = db.Product.findAll({
          where:{
    
            categoryId:1
            
            
        },
          
          order: [
            ['price', 'desc'],
           
          ],
        })
      } 
    
    }
      
      
           if (productType) {
      allProducts = db.Product.findAll({
        where:{
          categoryId:1,
            productTypeId:productType
            
            
        }
      })
      }
    
    Promise.all([ allProducts])
    
    
    .then(([ allProducts]) => {
      return res.render("productsDogs",{
        products:allProducts,
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
},

store: (req, res) => {
  const errors = validationResult(req);

 
  if (!req.file && !req.fileValidationError) {
    errors.errors.push({
      value: "",
      msg: "El producto debe tener por lo menos una imagen",
      param: "images",
      location: "file",
    });
  }

  if (req.fileValidationError) {
    errors.errors.push({
      value: "",
      msg: req.fileValidationError,
      param: "images",
      location: "file",
    });
  }

 
 

  if (errors.isEmpty()) {
    const{
      name,
      description,
      price,
      discount,
      weight,
      category,
      stock,
      productType,
    } = req.body;

    db.Product.create({
     
        name : name.trim(),
        description : description.trim(),
        price,
        discount,
        image:req.file.filename,
        weight,
        productTypeId : productType,
        categoryId : category,
        stock,
       
    })
      .then(() => {
      

        return res.redirect("/admin");
      })
      .catch((error) => console.log(error));
  } else {
    const productoTipo = db.ProductType.findAll({
   
      attributes: ["name", "id"],
    }); 
   
    const categories = db.Category.findAll({
     
      attributes: ["name", "id"],
    });
  
   

    if (req.file) {
      
        fs.existsSync(`./public/images/products/${file.filename}`) 
          fs.unlinkSync(`./public/images/products/${file.filename}`);
    
    }

    Promise.all([ productoTipo, categories])
      .then(([productoTipo, categories]) => {

        return res.render("productCreate", {
          productoTipo,
          categories,
          errors: errors.mapped(),
          old: req.body,
        });
      })
      .catch((error) => console.log(error));
  }
},

update: (req, res) => {
  const errors = validationResult(req);


  
 
  

  if (req.fileValidationError) {
    errors.errors.push({
      value: "",
      msg: req.fileValidationError,
      param: "images",
      location: "file",
    });
  }
  

 
  if (errors.isEmpty()) {
    const{
      name,
      description,
      price,
      discount,
      weight,
      category,
      stock,
      productType,
    } = req.body;
    const id = +req.params.id;
    db.Product.update({
     
        name : name.trim(),
        description : description.trim(),
        price,
        discount,
        image:req.file ? req.file.filename:db.Product.image,
        weight,
        productTypeId:productType,
        categoryId:category,
        stock,
       
        
      },{

        where:{id}
      }
    
    
    
    )
      .then(() => {
      

        return res.redirect("/admin");
      })
      .catch((error) => console.log(error));
  } else {
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

    const productoTypes = db.ProductType.findAll({
   
      attributes: ["name", "id"],
    }); 
   
    const categories = db.Category.findAll({
     
      attributes: ["name", "id"],
    });
  
   

    if (req.file) {
      
        fs.existsSync(`./public/images/products/${file.filename}`) 
          fs.unlinkSync(`./public/images/products/${file.filename}`);
    
    }

    Promise.all([ productoTypes, categories,producto])
      .then(([productoTypes, categories,producto]) => {

        return res.render("productEdit", {
          ...producto.dataValues,
          productoTypes,
          categories,
          
          errors: errors.mapped(),
          old: req.body,
        });
      })
      .catch((error) => console.log(error));
  }
},

remove: async (req, res) => {

  const id = req.params.id;
  
  await db.Product.findByPk(id,{
    include : {all :true},
    attributes : ['image'],
  })

 .then( product => {

  fs.existsSync(`./public/images/products/${product.image}`) 
  fs.unlinkSync(`./public/images/products/${product.image}`);

    db.Product.destroy({
      where : {
        id
      }
    })


      .then(() => {
       
       
       

        return res.redirect(`/admin`);
      })
  }).catch(error => console.log(error))



  







}


}
