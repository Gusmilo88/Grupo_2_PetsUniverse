const {productsAll} = require('../../services/productsServices')

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







}










}