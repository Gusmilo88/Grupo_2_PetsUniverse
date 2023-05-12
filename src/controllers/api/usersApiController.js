const {getAllUsers, getUserById,verifyuser, verifyUserByEmail} = require("../../services/usersServices")
const { compareSync} = require('bcryptjs');
const db = require("../../database/models");
module.exports = {
    index : async(req, res) => {
        try {
            
            const users = await getAllUsers(req);
            return res.status(200).json({
                ok : true,
                count :  users.length,
                users
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
    },

    detail : async (req, res) => {
        try {
            
            const users = await getUserById(req.params.id, req);
            return res.status(200).json({
                ok : true,
                count : users.length,
                users
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
    } ,

    verifyUseruniverse :async(req,res)=>{
        try {
        
        let existUser = await verifyuser(req.body.email,req.body.password)
        
        return res.status(200).json({
            ok:true,
            data:{existUser}
        
        })
        
            
        } catch (error) {
            console.log(error) 
            return res.status(error.status || 500).json({
            ok:false,
         error:{
         status:error.status || 500,
         message : error.message || 'Ups,hubo un error xd'
         
         }
         
         })
         
        }
        
        
            },


            verifyEmail : async (req,res) => {
                try {
        
                    let existUser = await verifyUserByEmail(req.body.email);
        
                    return res.status(200).json({
                        ok : true,
                        data : {
                            existUser
                        }
                    })
        
                } catch (error) {
                    console.log(error)
                    return res.status(error.status || 500).json({
                        ok : false,
                        error : {
                            status : error.status || 500,
                            message : error.message || "Upss, hubo un error"
                        }
                    })
                }
            }
}