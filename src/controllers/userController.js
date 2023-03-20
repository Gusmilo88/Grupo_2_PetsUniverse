const {validationResult} = require("express-validator");
const {readJSON, writeJSON} = require("../data");
const {hashSync} = require("bcryptjs");



module.exports = {
    login: (req,res)=>{
        return res.render('login')
    },
    processLogin : (req,res) => {
        const errors = validationResult(req);

        if(errors.isEmpty()){

            const {id, name, rol} = readJSON('users.json').find(user => user.email === req.body.email)

            req.session.userLogin = {
                id,
                name,
                rol
            }
            if(req.body.recordarUsuario){
                res.cookie('userPetsUniverse', req.session.userLogin,{maxAge : 1000 * 30})
            }
        return res.redirect('/')  
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
            const users = readJSON("users.json");

            const {firstName, lastName, email, password, rol, avatar} = req.body;

            const newUser = {
                id : users.length ? users[users.length - 1].id + 1 : 1,
                firstName : firstName.trim(),
                lastName : lastName.trim(),
                email : email.trim(),
                password : hashSync(password, 10),
                rol : rol ? "admin" : "admin"  || rol ? "customer" : "customer",
                avatar : "defaultAvatar.png",
            }

            users.push(newUser)

            writeJSON("users.json", users);
            return res.redirect("/users/login");

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

