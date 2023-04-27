
module.exports =(req,res,next)=> {


    
    if(req.session.userLogin && req.session.userLogin.role === 1){
        next()
    }
return res.redirect('/')


}