const db = require('../database/models')
const {literalQueryUrl,literalQueryUrlImage} = require('../helpers')

module.exports ={


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





    }













}