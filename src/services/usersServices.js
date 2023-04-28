const db = require("../database/models");
const {literalQueryUrl,literalQueryUrlImage} = require('../helpers')

module.exports = {

    getAllUsers : async () => {

        try {
            const users = await db.User.findAll({
                attributes: { exclude: ["password", "roleId", "createdAt", "updatedAt","id", "addressId"] }
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

    getUserById : async (id) => {

        try {
            const user = await db.User.findByPk(id, {
                attributes: { exclude: ["password", "roleId", "createdAt", "updatedAt","id", "addressId"] }
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


    usersImageAll: async(req)=>{

        try {
        
            const {count,rows:users} =await db.User.findAndCountAll({
        
                
        attributes:{
            exclude:["password","roleId"],
            include:[ 
            literalQueryUrl(req,'users','User.id'),
            literalQueryUrlImage(req,"users",'image','image')
            ]}
        ,      
            })
        return {count,users}
        
        } catch (error) {
               console.log(error)
        throw{
        status:500,
        message: error.message
        
        }            
}
}




}