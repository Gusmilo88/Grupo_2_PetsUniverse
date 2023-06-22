module.exports = (req,res,next) => {
    if(req.session.userLogin){
        res.locals.userLogin = req.session.userLogin
    }


    if(req.session.message){
        res.locals.message = req.session.message
    }
    next()
}