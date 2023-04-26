const { name } = require('ejs')
const db = require('../database/models')
const {literalQueryUrl,literalQueryUrlImage} = require('../helpers')

module.exports = {


    productsAll: async(req)=>{

try {

    const {count,rows:products} =await db.Product.findAndCountAll({

        
attributes:{include:[
    literalQueryUrl(req,'products','Product.id'),
    literalQueryUrlImage(req,'products','image','image')
]}
,
      


        
        
    })
return {count,products}

} catch (error) {
       console.log(error)
throw{
status:500,
message: error.message

}
    
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
                
                    
            
                    const productsdestroy = await   db.Product.destroy({
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