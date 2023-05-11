

     

        const $ = (id)=>document.getElementById(id)




        const verifyEmail = async(email,password)=>{

try {
  let response = await fetch("/api/users/verify-user",{
    method:'POST',
    body:JSON.stringify({email:email,password:password
    }),
    headers:{'Content-Type': "application/json"}
  });
  let result = await response.json();

  return result.data.existUser

  console.log(result)
  
} catch (error) {
  
}



}













        $('emailLogin').addEventListener('blur', async function(e){
    
    switch (true) {
      case !this.value.trim():
      this.placeholder = "El correo es obligatorio"
      this.classList.add('errorInput')
  
        break;
      default:
      this.placeholder = ""
      this.classList.remove('errorInput')

        
        break;
    }
  })
  $('emailLogin').addEventListener('focus',function(e){
    this.placeholder = ""
      this.classList.remove('errorInput')
  })


    $('passwordLogin').addEventListener('blur',  function(e){


        $('passwordLogin').addEventListener('focus',function(e){
    this.placeholder = ""
      this.classList.remove('errorInput')
  })
    
    switch (true) {
      case !this.value.trim():
      this.placeholder = "La constraseña es obligatoria"
      this.classList.add('errorInput')
  
        break;
      default:
      this.placeholder = ""
      this.classList.remove('errorInput')

        
        break;
    }
  })

        $('formRegister').addEventListener('submit',async function  (e){
    e.preventDefault();
let error =false


if(!await  verifyEmail( $('emailLogin').value.trim(),$('passwordLogin').value.trim()) ){
 
      



    let audio = new Audio
    audio.src = `/sound/efecto-de-sonido-error_fvkccFUU.mp3`

        audio.play()
    

Swal.fire({
        position: 'middle',
        imageUrl: '/images/pets2.gif',
      imageHeight: 300,
      imageWidth: 300,
        title: `Incorrecto`,
        showConfirmButton: false,
      timer: 3500 ,
      background: 'rgba(255, 0, 0, 0.6)',
      color:'white'
      })

      error = true

 $('passwordLogin').classList.add('errorInput'),$('passwordLogin').placeholder = "Credenciales Invalidas",
  $('emailLogin').classList.add('errorInput'),$('emailLogin').placeholder = "Credenciales Invalidas"
}else{
    let audio = new Audio
    audio.src = `/sound/MagicCartoon CTE01_93.3_preview.mp3`

audio.play()
    
    Swal.fire({
        position: 'middle',
        imageUrl: '/images/pets.gif',
      imageHeight: 300,
      imageWidth: 300,
        title: `Bienvenido`,
        showConfirmButton: false,
      timer: 5500 ,
      background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.07) 0%, rgba(2, 152, 227, 0.7) 33.33%, rgba(1, 58, 87, 0.7) 66.67%, rgba(0, 0, 0, 0.7) 100%)',
      color:'white'
      })






      setTimeout(function(){
        error = false
        $('formRegister').submit()

       
}, 3000);




        

}

  


/* for (let i = 0; i < this.elements.length -2; i++) {
  if(!this.elements[i].value.trim()|| this.elements[i].classList.contains('is-invalid') ){
    error = true;
    this.elements[i].classList.add('is-invalid')
    $('error-form').innerHTML = "todos los cambios son obligatorios"
  }
  
}
 */

  

 /* !error && this.submit()  */




  })





  