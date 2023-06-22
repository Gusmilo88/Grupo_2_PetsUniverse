const db = require("../database/models");
const {literalQueryUrl,literalQueryUrlImage} = require('../helpers')
const {compare} = require('bcryptjs');
module.exports = {
    
    getAllUsers : async (req) => {

        try {
            const users = await db.User.findAll({
                attributes: { exclude: ["password", "roleId", "createdAt", "updatedAt","id", "addressId"],
                include:[ 
                    literalQueryUrl(req,'users','User.id'),
                    literalQueryUrlImage(req,"users",'avatar','image')
                    ]
            }
            })
            return users
            
        } catch (error) {
            console.log(error)
            throw {
                status: 500,
                message: error.message
            };
        }

    },

    getUserById : async (id,req) => {

        try {
            const user = await db.User.findByPk(id, {
                attributes: { exclude: ["password", "roleId", "createdAt", "updatedAt","id", "addressId"],
                include:[ 
                    literalQueryUrl(req,'users','User.id'),
                    literalQueryUrlImage(req,"users",'avatar','image')
                    ]
            }
            })
            return user
            
        } catch (error) {
            console.log(error)
            throw {
                status: 500,
                message: error.message
            };
        }

    },

    verifyuser : async(email,password) =>{
try {
    const {compare} = require('bcryptjs');
    
    const user = await db.User.findOne({ where : {email : email }});

       const password_valid = await compare(password,user.password);
   
        return user && password_valid  ?  true :false

} catch (error) {
    throw{
       status:500,
       message:error.message 
    }
    
}
    },

    verifyUserByEmail : async (email) => {
        try {
            let user = await db.User.findOne({
                where : {
                    email
                }
            })
            return user ? true : false
            
        } catch (error) {
            console.log(error);
            throw{
                status : 500,
                message : error.message
            }
        }
    }
}