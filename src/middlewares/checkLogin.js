
module.exports =(req,res,next)=> {


    
    if(req.session.userLogin){
        next()
    }
return redirect('/')


}