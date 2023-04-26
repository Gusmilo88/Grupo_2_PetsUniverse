const {productsAll,createProducts,productsDelete,ProductsUpdate} = require('../../services/productsServices')
const createResponseError = require('../../helpers/createResponseError');
const{validationResult} = require('express-validator')
module.exports = {

index:async(req,res)=>{

try {

    const{products,count}= await productsAll(req);

    return res.status(200).json({
        ok:true,
        count,
       products
    })
    
} catch (error) {

    return res.status(error.status || 500).json({
        ok:false,
        error:{
            status:error.status || 500,
            message:error.message || 'Ups,hubo un error xd'
        }
    })




}







},


store:async(req,res)=>{
        
        
        
    try {
    
        const errors = validationResult(req)
        
          
          
        
          
        if(!errors.isEmpty()) throw{
          status:400,
          message:errors.mapped()
        }

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
  
    
    
        const newGenre = await createProducts(
             req.body)
       
    
        return res.status(200).json({
            ok:true,
            meta:{
                
                status:200,
                
                total:1},
            data:newGenre,
            url:`/api/genres/${newGenre.id}`
            
                })
        
    } catch (error) {
        return  createResponseError(res,error)
    }
    
    
        },

destroy: async(req, res) => {

            try {
            
                const{
                    params:{id}
                } = req
            
              
                const products = await  productsDelete(id)
            
                 return res.status(200).json({
               
            message:`se ha borrado el producto con el id ${id}`
            
                })
            
            
                       
                
            } catch (error) {
            
                
                return  createResponseError(res,error)
                
            }
            
            
            
                    
                },



update:async(req,res)=>{
                    try {
            
                        const{
                            params:{id}
                        } = req
                    
                      
                        const productsupdate = await  ProductsUpdate(req.body,id)
                    
                         return res.status(200).json({
                       
                    ok:true,
                    meta:{
                        
                        status:200,
                        
                        total:1,
                        url:`/api/genres/${id}`},
                    data:productsupdate,
                    
                        })
                    
                    
                               
                        
                    } catch (error) {
                    
                        
                        return  createResponseError(res,error)
                        
                    }
                },
    








}