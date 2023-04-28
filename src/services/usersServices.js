const db = require("../database/models");
const {literalQueryUrl,literalQueryUrlImage} = require('../helpers')

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







}