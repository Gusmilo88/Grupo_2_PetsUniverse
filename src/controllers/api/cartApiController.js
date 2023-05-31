const { getOrder, createProductInCart, clearAllProductFromCart, removeProductFromCart, moreOrLessQuantityFromProduct, modifyStatusFromOrder } = require("../../services/cartServices")
const db = require('../../database/models');
const sendSuceessResponse = require("../../helpers/sendSuceessResponse");
const sendErrorResponse = require("../../helpers/sendErrorResponse");

module.exports = {
    getOrderPending: async (req,res) => {
        try {
            const {id} = req.session.userLogin;
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
            const { productId, userId } = req.body
            //const {id} = req.session.userLogin
            await createProductInCart({userId: 1, productId})
            sendSuceessResponse(res)
            
        } catch (error) {
            sendErrorResponse(res,error)
            
        }

    },
    removeProduct: async(req,res) => {
        try {
            const { productId } = req.body  //const { productId, userId } = req.body
            /* const {id} = req.session.userLogin  *///const {user} = req.session.userLogin
            
            await removeProductFromCart({userId: 1, productId}) //await removeProductFromCart({userId: user?.id || userId, productId})
            sendSuceessResponse(res)
            
        } catch (error) {
            sendErrorResponse(res,error)
            
        }
    },
    moreQuantity: async(req,res) => {
        try {
            const { productId } = req.body  //const { productId, userId } = req.body
            //const {id} = req.session.userLogin //const {user} = req.session.userLogin
            //const cart =//
            await moreOrLessQuantityFromProduct({userId: 3, productId}) //await removeProductFromCart({userId: user?.id || userId, productId})
            sendSuceessResponse(res) //{data: cart})
            } catch (error) {
            sendErrorResponse(res,error)
            
        }
    },
    lessQuantity:async(req,res) => {
            try {
                const { productId } = req.body  //const { productId, userId } = req.body
                /* const {id} = req.session.userLogin */ //const {user} = req.session.userLogin
                //const cart =//
                await moreOrLessQuantityFromProduct({
                    userId: 1, 
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
            // const {id} = req.session.userLogin
            await clearAllProductFromCart({ userId: 1})
            sendSuceessResponse(res)
        } catch (error) {
            sendErrorResponse(res,error)
            
        }
    },
    statusOrder: async(req,res) => {

        try {
            const { status } = req.body

            //const {id} = req.session.userLogin
           await modifyStatusFromOrder({ userId: 1, status })
           sendSuceessResponse(res)
        } catch (error) {
            sendErrorResponse(res,error)
            
        }
    }
}