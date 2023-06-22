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

            }).then( ({id, firstName, roleId}) =>{  
                req.session.userLogin = {
                    id,
                    firstName,
                    role : roleId
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

        // return res.send(req.body)
        if(errors.isEmpty()){
            

            const {firstName, lastName, email, password} = req.body;

            db.Address.create()
            .then( address =>{
                db.User.create({
                    firstName : firstName.trim(),
                    lastName : lastName.trim(),
                    email : email.trim(),
                    password : hashSync(password, 10),
                    roleId : 2,
                    addressId : address.id

                }).then(({id, firstName, roleId}) => {
                    req.session.userLogin = {
                        id,
                        firstName,
                        role : roleId
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
res.clearCookie("userPetsUniverse")
res.redirect('/')
},

profile : (req,res) => {
    db.User.findByPk(req.session.userLogin.id,{
        attributes : ['firstName','lastName','email','avatar'],
        include : [
            {
                association : 'addresses',
                attributes : ['address','city','province','zipCode']
            }
        ],

    })
        .then(user => {
            return res.render('profile',{
                title : "Perfil de usuario",
                user
            })
        })
        .catch(error => console.log(error))

  
},

















} //

//..//