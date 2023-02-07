module.exports = {

    
    
    
    
    index:(req,res) => {
        return res.render('index')

    },

    cart:(req,res) => {
        return res.render('productCart')


    },

    
    
    nosotros:(req,res) =>{
        return res.render('nosotros')
    }


}
