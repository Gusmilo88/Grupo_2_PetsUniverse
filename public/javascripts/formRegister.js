const $ = (id) => document.getElementById(id); //El signo de pesos "$" se usa como convención de nomenclatura para indicar que la variable almacena un objeto de tipo "Element" o "HTMLElement" 

// const msgError = (element, message, { target }) => {
//     $(element).innerHTML = message;
//     target.classList.add("errorInput");
// };

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
$("email").addEventListener("blur", function(e) {
    switch (true) {
        case !this.value.trim():
            this.placeholder = "El email es obligatorio"
            this.classList.add("errorInput")            
            break;

        case !regExEmail.test(this.value.trim()):
            this.placeholder = "Tiene que ser un email válido"
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

