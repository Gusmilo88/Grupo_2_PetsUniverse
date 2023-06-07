const check = document.getElementById ('flexSwitchCheckDefault')

let footer
 check.addEventListener('click',function (){

    if(this.checked){
        localStorage.setItem('lpm',true)
        footer = document.querySelector('footer')
            const oscuro = document.querySelectorAll('.header')
            for (let i = 0; i < oscuro.length; i++) {
               
            oscuro[i].style.background = "#ffffff26"
                
                }

                /* const oscuroProductos = document.querySelectorAll('.products_main_producto')
                for (let i = 0; i < oscuroProductos.length; i++) {
                   
                    oscuroProductos[i].classList.remove('products_main_producto')
                    oscuroProductos[i].classList.add('products_main_producto--oscuro')
                    
                    } */
        document.getElementById('perros').src = '/images/perritoNegro.png',
        document.getElementById('gatos').src = '/images/gatitoNegro.png',
        document.getElementById('alienxd').src = '/images/marcianoNegro.png',
        document.body.classList.remove('boee'),
        document.body.classList.add('body_oscuro'),
        
        footer.classList.remove('home__footer'),
        footer.classList.add('home__footer_black')
        const register = document.querySelector('.register__main__div--info')
        register.style.background = "#0000008f"
        const iconElement = document.getElementById("icon");
        iconElement.className = "fa-regular fa-moon";
        iconElement.style.color = "#7300ff";
        iconElement.textContent = "Dark mode";
}else{
    localStorage.removeItem('lpm');
   /*  xdxd =  */
    header = document.querySelector('header')
    footer = document.querySelector('footer')

    const iconElement = document.getElementById("icon");
                iconElement.className = "fa-regular fa-sun";
                iconElement.style.color = "#ffe100";
                iconElement.textContent = "Light mode";
    
    header.classList.add('home__header');
    header.classList.remove('negruuu')
    document.getElementById('perros').src = '/images/perrito.png',
    document.getElementById('gatos').src = '/images/gatito.png'
    document.getElementById('alienxd').src = '/images/et.png'
    document.body.classList.add('boee')
    document.body.classList.remove('body_oscuro')
    
    footer.classList.remove('home__footer_black'),
    footer.classList.add('home__footer')


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


               /*  const oscuroProductos = document.querySelectorAll('.products_main_producto')
                for (let i = 0; i < oscuroProductos.length; i++) {
                   
                    oscuroProductos[i].classList.remove('products_main_producto')
                    oscuroProductos[i].classList.add('products_main_producto--oscuro')
                    
                    } */
                const iconElement = document.getElementById("icon");
        iconElement.className = "fa-regular fa-moon";
        iconElement.style.color = "#7300ff";
        iconElement.textContent = "Dark mode";
       
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
 

// Código para la animación del botón:
const switchElement = document.getElementById("flexSwitchCheckDefault");
const iconElement = document.getElementById("icon");
const labelElement = document.querySelector(".form-check-label");

    switchElement.addEventListener("change", function() {
        if (this.checked) {
            // Cambia al ícono de la luna
            iconElement.className = "fa-regular fa-moon";
            iconElement.style.color = "#7300ff";
            iconElement.textContent = "Dark mode";
        } else {
            // Cambia al sol
            iconElement.className = "fa-regular fa-sun";
            iconElement.style.color = "#ffe100";
            iconElement.textContent = "Light mode";
        }
});
