const fs = require('fs');
const path = require('path')

const productsFilePath= path.join(__dirname,'../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));
const db = require("../database/models")


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

    search: (req, res) => {
            const {keywords} = req.query;
            const productsFiltered = products.filter(product => product.name.toLowerCase().includes(keywords.toLowerCase()) || product.description.toLowerCase().includes(keywords))
            return res.render("results",{
                productsFiltered,keywords,  
            })
        },
        dashboard: (req, res) => {
          let ProductsDashboar 
          const {Buscar} = req.query;

         
          
          if(Buscar){
             ProductsDashboar = products.filter(product => product.name.toLowerCase().includes(Buscar.toLowerCase()) || product.description.toLowerCase().includes(Buscar)||product.category.toLowerCase().includes(Buscar.toLowerCase()))
         
        }else{
            ProductsDashboar = products
        }



            return res.render('dashboard',{
               
              products:ProductsDashboar,Buscar
           
              
            })
        },


}
