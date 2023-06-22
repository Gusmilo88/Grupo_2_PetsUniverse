const { getOrder, createProductInCart, clearAllProductFromCart, removeProductFromCart, moreOrLessQuantityFromProduct, modifyStatusFromOrder } = require("../../services/cartServices")
const db = require('../../database/models');
const sendSuceessResponse = require("../../helpers/sendSuceessResponse");
const sendErrorResponse = require("../../helpers/sendErrorResponse");

module.exports = {
    getOrderPending: async (req,res) => {
        try {

            const {id} = req.session.userLogin; 
            /*  console.log(req.session.userLogin.id) */
            const order = await getOrder({ userId: id })
            sendSuceessResponse(res, { data: order })
 //console.log(userId)
//console.log(order)
//console.log(isCreated)
        } catch (error) {
            sendErrorResponse(res,error)
            
            
        }
        
        
    },
    addProduct: async(req,res) => {
        try {
            const {productId} = req.body
        const {id} = req.session.userLogin  
            //console.log("*******",productId,id);
            await createProductInCart({userId:id, productId})
            sendSuceessResponse(res)
            
        } catch (error) {
            console.log(error);
            sendErrorResponse(res,error)
            
        }

    },
    removeProduct: async(req,res) => {
        try {
            const { productId } = req.body  //const { productId, userId } = req.body
            const {id} = req.session.userLogin 
            
            await removeProductFromCart({userId: id, productId}) //await removeProductFromCart({userId: user?.id || userId, productId})
            sendSuceessResponse(res)
            
        } catch (error) {
            sendErrorResponse(res,error)
            
        }
    },
    moreQuantity: async(req,res) => {
        try {
            const { productId } = req.body;
            const {id} = req.session.userLogin /* //const {user} = req.session.userLogin */
            //const cart =//
           const order= await moreOrLessQuantityFromProduct({userId: id, productId}) //await removeProductFromCart({userId: user?.id || userId, productId})
            sendSuceessResponse(res,{data:order}) //{data: cart})
            } catch (error) {
            sendErrorResponse(res,error)
            
        }
    },
    lessQuantity:async(req,res) => {
            try {
                const { productId } = req.body  //const { productId, userId } = req.body
                const {id} = req.session.userLogin 
                //const cart =//
                await moreOrLessQuantityFromProduct({
                    userId: id, 
                    productId,
                    action: "less",
                }) //await removeProductFromCart({userId: user?.id || userId, productId})
                sendSuceessResponse(res) //{data: cart})
                } catch (error) {
                sendErrorResponse(res,error)
                
            }

    },
    clearCart: async(req,res) => {
        try {
            const {id} = req.session.userLogin
            await clearAllProductFromCart({ userId: id})
            sendSuceessResponse(res)
        } catch (error) {
            sendErrorResponse(res,error)
            
        }
    },
    statusOrder: async(req,res) => {

        try {
            const { status } = req.body

            const {id} = req.session.userLogin
           await modifyStatusFromOrder({ userId: id, status })
           sendSuceessResponse(res)
        } catch (error) {
            sendErrorResponse(res,error)
            
        }
    }
}