   
const check = document.getElementById('flexSwitchCheckDefault')

let footer
 check.addEventListener('click',function (){

    if(this.checked){
        localStorage.setItem('lpm',true)
        footer = document.querySelector('footer')
            const oscuro = document.querySelectorAll('.header')
            for (let i = 0; i < oscuro.length; i++) {
               
            oscuro[i].style.background = "#ffffff26"
                
                }
       
        document.getElementById('perros').src = '/images/perritoNegro.png',
        document.getElementById('gatos').src = '/images/gatitoNegro.png',
        document.getElementById('alienxd').src = '/images/marcianoNegro.png',
        document.body.classList.remove('boee'),
        document.body.classList.add('body_oscuro'),
        
        footer.classList.remove('home__footer'),
        footer.classList.add('home__footer_black')
        const register = document.querySelector('.register__main__div--info')
        register.style.background = "#0000008f"
        

 
 
          

              
 

  
   
}else{
    localStorage.removeItem('lpm');
   /*  xdxd =  */
    header = document.querySelector('header')
    footer = document.querySelector('footer')
    
    header.classList.add('home__header');
    header.classList.remove('negruuu')
    document.getElementById('perros').src = '/images/perrito.png',
    document.getElementById('gatos').src = '/images/gatito.png'
    document.getElementById('alienxd').src = '/images/et.png'
    document.body.classList.add('boee')
    document.body.classList.remove('body_oscuro')

   


const oscuro = document.querySelectorAll('.header')
for (let i = 0; i < oscuro.length; i++) {
   
oscuro[i].style.background = ""
    
    }

    const register = document.querySelector('.register__main__div--info')
        register.style.background = ""
        

       /*  const registerxd = document.querySelectorAll('.register__main__div--info input')
        for (let i = 0; i < registerxd.length; i++) {
               
            registerxd[i].style.background = ""
                
                } */


             

   
}


})




const localxd = localStorage.getItem('lpm'); 

 
if (localxd) {
    check.checked = true 
 
    footer = document.querySelector('footer')
            const oscuro = document.querySelectorAll('.header')
            for (let i = 0; i < oscuro.length; i++) {
               
            oscuro[i].style.background = "#ffffff26"
                
                }
       
        document.getElementById('perros').src = '/images/perritoNegro.png',
        document.getElementById('gatos').src = '/images/gatitoNegro.png',
        document.getElementById('alienxd').src = '/images/marcianoNegro.png',
        document.body.classList.remove('boee'),
        document.body.classList.add('body_oscuro'),
        
        footer.classList.remove('home__footer'),
        footer.classList.add('home__footer_black')
        const register = document.querySelector('.register__main__div--info')
        register.style.background = "#0000008f"
        

       
   
}
  
  // Código para restaurar el estado de la página según el valor de miEstadoDePagina
 

