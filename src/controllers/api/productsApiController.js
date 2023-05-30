const {productsAllDogs,createProducts,productsDelete,ProductsUpdate,getProductById, productsAllCats} = require('../../services/productsServices')
const createResponseError = require('../../helpers/createResponseError');
const{validationResult} = require('express-validator')
module.exports = {

indexDog:async(req,res)=>{

try {
const{page=1,limit=6,productType=0,price="false"}=req.query
    const{products,count,pages}= await productsAllDogs(req,{page,limit,productType,price});

let data 


 if(productType === "0"  && price === "false"  ){
        
        data ={
            count,
            products,
            pages,
            currentPage: +page,
            numero:+productType,
            precios:price
        }
    }else{
        data ={
            count,
            products,
            pages,
            currentPage: +page,
            numero:+productType,
            precios:price
        }

    }

    return res.status(200).json({
        ok:true,
        data
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


indexCat:async(req,res)=>{

    try {
    const{page=1,limit=6,productType=0,price="false"}=req.query
        const{products,count,pages}= await productsAllCats(req,{page,limit,productType,price});
    
    let data 
    
    
     if(productType === "0"  && price === "false"  ){
            
            data ={
                count,
                products,
                pages,
                currentPage: +page,
                numero:+productType,
                precios:price
            }
        }else{
            data ={
                count,
                products,
                pages,
                currentPage: +page,
                numero:+productType,
                precios:price
            }
    
        }
    
        return res.status(200).json({
            ok:true,
            data
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
  
    
    
        const newProducts = await createProducts(
             req.body)
       
    
        return res.status(200).json({
            ok:true,
            meta:{
                
                status:200,
                
                total:1},
            data:newProducts,
            url:`/api/genres/${newProducts.id}`
            
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
                detail : async (req, res) => {
                    try {
                        
                        const product = await getProductById(req.params.id, req);
                        if(!product){
                            throw {
                                status : 404,
                                message : "Curso no encontrado"
                            }
                        }
                        return res.status(200).json({
                            ok : true,
                            product
                        })
            
                    } catch (error) {
                        console.log(error);
                        return res.status(error.status || 500).json({
                            ok : false,
                            error : {
                                status : error.status || 500,
                                message : error.message || "Upss hubo un error",
                            }
                        })
                    }
                } 
            }








