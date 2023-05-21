const { name } = require('ejs')
const db = require('../database/models')
const {literalQueryUrl,literalQueryUrlImage} = require('../helpers')
/* const fs = require('fs');
const path = require('path'); */
module.exports = {


    productsAllDogs: async(req,{page=1,limit=6,productType=0,price="false"}={})=>{
        
try {
  
   
        if (productType === "0" && price === "false") {

            const {docs,pages,total} =  await db.Product.paginate({
                where:{
                    categoryId:1,
                      
                      
                      
                  },

       

              
                attributes:{include:[
                    literalQueryUrl(req,'products','Product.id'),
                    literalQueryUrlImage(req,'products','image','image')
                ]}
                ,
                page,
                paginate:limit
                      
                
                
                        
                        
                    })
                    return {products:docs,pages,count:total}
        }else{

            let precio
            let productsxd

            if(price !== "false"){
         precio = [['price',price ]]

    }else{
         precio = null
    } 

    if(productType !== "0"){
        productsxd= {
            categoryId:1,
            productTypeId:productType
              
              
          }

   }else{
        productsxd = {
            categoryId:1,
         
              
              
          }
   } 


                     const {docs,pages,total} =  await db.Product.paginate({

        where:productsxd,
          order:precio,

              
attributes:{include:[
    literalQueryUrl(req,'products','Product.id'),
    literalQueryUrlImage(req,'products','image','image')
]}
,
page,
paginate:limit
      


        
        
    })

    return {products:docs,pages,count:total}
        }



           

    
            





   








} catch (error) {
       console.log(error)
throw{
status:500,
message: error.message

}
    
}





    },

    productsAllCats: async(req,{page=1,limit=6,productType=0,price="false"}={})=>{
        
        try {
          
           
                if (productType === "0" && price === "false") {
        
                    const {docs,pages,total} =  await db.Product.paginate({
                        where:{
                            categoryId:2,
                              
                              
                              
                          },
        
               
        
                      
                        attributes:{include:[
                            literalQueryUrl(req,'products','Product.id'),
                            literalQueryUrlImage(req,'products','image','image')
                        ]}
                        ,
                        page,
                        paginate:limit
                              
                        
                        
                                
                                
                            })
                            return {products:docs,pages,count:total}
                }else{
        
                    let precio
                    let productsxd
        
                    if(price !== "false"){
                 precio = [['price',price ]]
        
            }else{
                 precio = null
            } 
        
            if(productType !== "0"){
                productsxd= {
                    categoryId:2,
                    productTypeId:productType
                      
                      
                  }
        
           }else{
                productsxd = {
                    categoryId:2,
                 
                      
                      
                  }
           } 
        
        
                             const {docs,pages,total} =  await db.Product.paginate({
        
                where:productsxd,
                  order:precio,
        
                      
        attributes:{include:[
            literalQueryUrl(req,'products','Product.id'),
            literalQueryUrlImage(req,'products','image','image')
        ]}
        ,
        page,
        paginate:limit
              
        
        
                
                
            })
        
            return {products:docs,pages,count:total}
                }
        
        
        
                   
        
            
                    
        
        
        
        
        
           
        
        
        
        
        
        
        
        
        } catch (error) {
               console.log(error)
        throw{
        status:500,
        message: error.message
        
        }
            
        }
        
        
        
        
        
            },




    
    getProductById : async (id,req) => {

        try {
            const product = await db.Product.findByPk(id, {
                attributes: { exclude: ["createdAt", "updatedAt","id"],
                include:[ 
                    literalQueryUrl(req,'products','Product.id'),
                    literalQueryUrlImage(req,"products",'image','image')
                    ]
            }
            })
            return product
            
        } catch (error) {
            console.log(error)
            throw {
                status: 500,
                message: error.message
            };
        }

    },
    

    createProducts:async({name,description,price,discount,weight,productType,category,stock})=>{

        try {
           
     

            const newproducts=db.Product.create(
               
                
                
                
                
                {
     
                name,
                description,
                price,
                discount,
                
                weight,
                productTypeId : productType === "alimento" ? 1 : null || productType === "juguetes" ? 2 : null || productType === "salud" ? 3 : null,
                categoryId : category === "perros" ? 1 : null ||category === "gatos" ?2 : null ,
                stock,
               
            })
return newproducts

        } catch (error) {
            throw {
                status: 500,
                message:error.message
            }
        }
        




    },


    productsDelete :async (id)=>{
                try {
                
                    
            
                    const productsdestroy = await db.Product.destroy({
                        where:{
                            id
                        }
                    });
                    return productsdestroy
                } catch (error) {
                    throw {
                        status: 500,
                        message:error.message
                    }
                }
            },


            ProductsUpdate :async ({name,description,price,discount,weight,productType,category,stock},id)=>{
                try {
                
                    
            
                    const productupdate = await   db.Product.update({
     
                        name,
                        description,
                        price,
                        discount,
                        
                        weight,
                        productTypeId : productType === "alimento" ? 1 : null || productType === "juguetes" ? 2 : null || productType === "salud" ? 3 : null,
                        categoryId : category === "perros" ? 1 : null ||category === "gatos" ?2 : null ,
                        stock,
                       
                    },{
                        where:{
                            id
                        }
                    });
                    return productupdate
                } catch (error) {
                    throw {
                        status: 500,
                        message:error.message
                    }
                }
                
                
                
                
                        
                    } ,






                  
}