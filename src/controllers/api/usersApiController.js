const {getAllUsers, getUserById} = require("../../services/usersServices")

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
    } 
}