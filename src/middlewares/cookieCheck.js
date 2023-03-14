module.exports = (req, res, next) => {
    if(req.cookies.userPetsUniverse){
        req.session.userLogin = req.cookies.userPetsUniverse
    }
    next()
}