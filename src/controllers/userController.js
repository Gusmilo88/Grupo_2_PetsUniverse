const {validationResult} = require("express-validator");
const {hashSync} = require("bcryptjs");
const db = require('../database/models')



module.exports = {
    login: (req,res)=>{
        return res.render('login')
    },
    processLogin : (req,res) => {
        const errors = validationResult(req);

        

        if(errors.isEmpty()){

            
            db.User.findOne({
                where : {
                    email : req.body.email
                }

            }).then( (id, name, rolId) =>{

                
                req.session.userLogin = {
                    id,
                    name,
                    rol : rolId
                }
            if(req.body.recordarUsuario){
                res.cookie('userPetsUniverse', req.session.userLogin,{maxAge : 1000 * 30})
            }
        return res.redirect('/') 
    })
    .catch(error => console.log(error))
    
    }else{
        return res.render('login', {
            title : "Iniciar sesión",
            errors : errors.mapped()
        })
    }
    },

    
    register:(req,res) =>{
        return res.render('register', {
            title : "Registro de usuario"
        })
    },

    processRegister : (req, res) => {
        const errors = validationResult(req);

        if(errors.isEmpty()){
            

            const {firstName, lastName, email, password} = req.body;

            db.Adress.create()
            .then( address =>{
                db.User.create({
                    firstName : firstName.trim(),
                    lastName : lastName.trim(),
                    email : email.trim(),
                    password : hashSync(password, 10),
                    roleId : 2,
                    addressId : address.id

                }).then(({id, name, roleId}) => {
                    req.session.userLogin = {
                        id,
                        name,
                        rol : roleId
                    }
                    return res.redirect('/')
                })

                })
            
            .catch(error => console.log(error))

            

        }else{
            return res.render('register',{
                title : "Registro de usuario",
                errors : errors.mapped(),
                old : req.body
            })
        }

        
    }


,




logout:(req,res)=>{
req.session.destroy()
res.redirect('/')
}





} //

//..//