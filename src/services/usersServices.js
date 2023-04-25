const db = require("../database/models");

module.exports = {

    getAllUsers : async () => {

        try {
            const users = await db.User.findAll({
                include : {all : true}
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
                include : {all : true}
            })
            return user
            
        } catch (error) {
            console.log(error)
            throw {
                status: 500,
                message: error.message
            };
        }

    }

}