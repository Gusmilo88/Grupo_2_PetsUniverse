const $ = (id) => document.getElementById(id); //El signo de pesos "$" se usa como convención de nomenclatura para indicar que la variable almacena un objeto de tipo "Element" o "HTMLElement" 

let regExLetter = /^[A-Z]+$/i; // verifica si una cadena de texto está compuesta únicamente por letras mayúsculas o minúsculas
let regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/; //verifica si una cadena de texto corresponde a una dirección de correo electrónico válida
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/; //mayuscula, numero y 6 a 12 caracteres