const {validationResult} = require("express-validator");
const {readJSON, writeJSON} = require("../data");
const {hashSync} = require("bcryptjs");



module.exports = {
    login: (req,res)=>{
        return res.render('login')
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

            const {firstName, lastName, email, password, avatar} = req.body;

            const newUser = {
                id : users.length ? users[users.length - 1].id + 1 : 1,
                firstName : firstName.trim(),
                lastName : lastName.trim(),
                email : email.trim(),
                password : hashSync(password, 10),
                
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

}