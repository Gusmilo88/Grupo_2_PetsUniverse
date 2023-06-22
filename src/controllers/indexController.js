const fs = require('fs');
const path = require('path');
const { Op } = require("sequelize");

const productsFilePath= path.join(__dirname,'../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));
const db = require("../database/models");
const { KeyObject } = require('crypto');


module.exports = {    
    index:(req,res) => {
        
        db.Product.findAll()
        .then((products) => {
            return res.render('index',{
                products})
        })
        .catch(error => console.log(error))
    },

    cart:(req,res) => {
        return res.render('productCart')


    },

    
    
    nosotros:(req,res) =>{
        return res.render('nosotros')
    },

    search: async(req, res) => {
            const {keywords} = req.query;
     
            db.Product.findAll({
                where:{

                    name:{[Op.like]: `%${keywords}%`}
                    
                    
                }
            })
           
             .then(productsFiltered =>{
                return res.render("results",{
                    productsFiltered,keywords 
                })
             }



)

          
        },
        dashboard: (req, res) => {
          let ProductsDashboar 
          const {Buscar} = req.query;

        
          
          if(Buscar){

            ProductsDashboar = db.Product.findAll({
                where:{

                    name:{[Op.like]: `%${Buscar}%`}
                    
                    
                }
            }).then( ProductsDashboar=>{
                return  res.render('dashboard',{
                           
                    products:ProductsDashboar,Buscar
                 
                    
                  })
              }).catch(error => console.log(error))


            /*  ProductsDashboar = products.filter(product => product.name.toLowerCase().includes(Buscar.toLowerCase()) || product.description.toLowerCase().includes(Buscar)||product.category.toLowerCase().includes(Buscar.toLowerCase())) */
         
        }else{

            const products=  db.Product.findAll().then(products=>{
                return  res.render('dashboard',{
                           
                    products,Buscar
                 
                    
                  })
              }).catch(error => console.log(error))






            ProductsDashboar = products
        }


  
  
  



            
        },


}
