const $ = (id) => document.getElementById(id); //El signo de pesos "$" se usa como convención de nomenclatura para indicar que la variable almacena un objeto de tipo "Element" o "HTMLElement" 

const inputAvatar = $("avatar");
const formAddRegister = $("formRegister")

const cleanError = (element, { target }) => {
    target.classList.remove("errorInput");
    target.classList.remove("successInput");
    $(element).innerHTML = null;
};

const checkedFields = () => {
    const elements = $("formRegister").elements;
    $("error-form").innerHTML = null;

    for (let i = 0; i < elements.length - 2; i++) {
        if (elements[i].classList.contains("errorInput")) {
        $("error-form").innerHTML = "¡Hay campos con errores o están vacíos!";
    }
    }
};

const verifyEmail = async (email) => {
    try {
        let response = await fetch("/api/users/verify-email",{
            method: "POST",
            body : JSON.stringify({
                email   :   email
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        });

        let result = await response.json();

        return result.data.existUser
        
    } catch (error) {
        console.error
    }
}

let regExLetter = /^[A-Z]+$/i; // verifica si una cadena de texto está compuesta únicamente por letras mayúsculas o minúsculas
let regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/; //verifica si una cadena de texto corresponde a una dirección de correo electrónico válida
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/; //mayuscula, numero y 8 a 12 caracteres
let regExPass2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_-])[A-Za-z\d$@$!%*?&_-]{6,12}/;


// Input del nombre
$("firstName").addEventListener("blur", function(e) {
    switch (true) {
        case !this.value.trim():
            this.placeholder = "El nombre es obligatorio"
            this.classList.add("errorInput")            
            break;
        
        case this.value.trim().length < 2:
            this.placeholder = "Debe tener minimo 2 caracteres"
            this.classList.add("errorInput")            
            break;

        case !regExLetter.test(this.value.trim()):
            this.placeholder = "Solo caracteres alfabéticos"
            this.classList.add("errorInput") 
            break 
    
        default:
            this.classList.add("successInput");
            checkedFields();
            break
    }
})

$("firstName").addEventListener("focus", function(e) {
    cleanError("firstName", e)
})


// Input del apellido
$("lastName").addEventListener("blur", function(e) {
    switch (true) {
        case !this.value.trim():
            this.placeholder = "El apellido es obligatorio"
            this.classList.add("errorInput")            
            break;
        
        case this.value.trim().length < 2:
            this.placeholder = "Debe tener minimo 2 caracteres"
            this.classList.add("errorInput")            
            break;

        case !regExLetter.test(this.value.trim()):
            this.placeholder = "Solo caracteres alfabéticos"
            this.classList.add("errorInput")
            break
    
        default:
            this.classList.add("successInput");
            checkedFields();
            break;
    }
})

$("lastName").addEventListener("focus", function(e) {
    cleanError("lastName", e)
})

// Input del email
$("email").addEventListener("blur", async function(e) {

    switch (true) {
        case !this.value.trim():
            this.placeholder = "El email es obligatorio"
            this.classList.add("errorInput")            
            break;

        case !regExEmail.test(this.value.trim()):
            this.placeholder = "Tiene que ser un email válido"
            this.classList.add("errorInput")
            break; 
    
        case await verifyEmail(this.value.trim()) :
            this.placeholder = "El email ya está registrado"
            this.classList.add("errorInput")
            break;

        default:
            this.classList.add("successInput");
            checkedFields();
            break;
    }
})

$("email").addEventListener("focus", function(e) {
    cleanError("email", e)
})

// Input de la contraseña
$("password").addEventListener("blur", function(e) {
    switch (true) {
        case !this.value.trim():
            this.placeholder = "La contraseña es obligatoria"
            this.classList.add("errorInput")            
            break;

        case this.value.trim().length < 8:
            this.placeholder = "Debe tener minimo 8 caracteres"
            this.classList.add("errorInput")            
            break;

        case !regExPass2.test(this.value.trim()):
            this.placeholder = "Debe tener mayúscula, minúscula, número y caracter especial"
            this.classList.add("errorInput")
            break;
    
        default:
            this.classList.add("successInput");
            checkedFields();
            break;
    }
})

$("password").addEventListener("focus", function(e) {
    cleanError("password", e)
})

// Input de confirmar contraseña
$("password2").addEventListener("blur", function(e) {
    switch (true) {
        case !this.value.trim():
            this.placeholder = "Tenés que confirmar la contraseña"
            this.classList.add("errorInput")            
            break;

        case this.value.trim() !== $("password").value.trim():
            this.placeholder = "Las contraseñas no coinciden"
            this.classList.add("errorInput")
            break;
    
        default:
            this.classList.add("successInput");
            checkedFields();
            break;
    }
})

$("password2").addEventListener("focus", function(e) {
    cleanError("password2", e)
})

// Input de la imagen (avatar)
const regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;


inputAvatar.addEventListener("change", function(e){
    switch (true) {
        case !regExExt.exec(this.value):
            $("avatarError").innerHTML = "Solo se admiten imágenes jpg, jpeg, png, gif, webp"
            break;
    
        default:
            cleanError("avatarError", e)
            $("avatarPreview").classList.remove('avatarError')
            if(this.files){
            [].forEach.call(this.files,readAndPreview);
        }
        
        function readAndPreview(file) {
            let reader = new FileReader()
            $('boxImagesPreview').innerHTML = null;
            reader.addEventListener('load', function(){
            let image = new Image();
            image.height = 100;
            image.title = file.name;
            image.src = this.result;
            $('boxImagesPreview').appendChild(image)
            })
            reader.readAsDataURL(file)
          }
            break;
    }
})

formAddRegister.addEventListener("submit", function (event) {
    event.preventDefault();
    let error = false;
    for (let i = 0; i < this.elements.length - 3; i++) {

      if (!this.elements[i].value || this.elements[i].classList.contains("errorInput")) {
        error = true
      }

    }

    if (!error) {
      this.submit()
    } else {
      for (let i = 0; i < this.elements.length - 3; i++) {

        !this.elements[i].value && this.elements[i].classList.add("errorInput")

        if(this.elements[i].id === "avatar" && this.elements[i].files.length === 0 ){
          
          $("avatarError").classList.add("avatarError")
        } 

      }
      $("error-form").innerHTML = "Los campos señalados son obligatorios."
    }
})