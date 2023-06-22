const db = require("../database/models");
const userController = require("./userController");


module.exports = {
    loginAndRegisterGoogle: async (req,res) => {
        const {
            provider,
            emails: [{value: email}],
            _json: { sub: gooogleId, given_name: name, family_name: surname, picture},
        } = req.session.passport.user;

try{

    const address = await db.Address.create()
    const [{id, roleId}, isCreate] = await db.User.findOrCreate({
        where: {
            socialId: gooogleId,
        },
        defaults : {
            firstName: name,
            lastName: surname,
            email,
            avatar: picture,
            addressId: address.id,
            socialId: gooogleId,
            socialProvider: provider
        }
    });
    if(!isCreate){
        await address.destroy()
    }

    req.session.userLogin = {
        id: id,
        firstName: name,
        role : roleId,
        socialId: gooogleId,
    };

    res.cookie('userPetsUniverse', req.session.userLogin,{maxAge : 1000 * 30})

    res.redirect("/")
}   catch (error) {
        console.log(error)
    }
}
}