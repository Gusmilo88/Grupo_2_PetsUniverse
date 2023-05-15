/* capturar elementos del formulario */
const $ = id => document.getElementById(id)
const productCreate = $('form-product-create')
const inputName = $('name');
const textAreaDescription = $('description');
const selectCategory = $('category');
const inputproductType = $('productType');
const inputPrice = $('price');
const inputDiscount = $('discount') ;
const inputStock = $('stock');
const inputImages = $('images');




inputName.addEventListener('blur', function(){
    switch (true) {
        case !this.value.trim():
            $('nameError').innerHTML = "El nombre del producto es obligatorio"
            this.classList.add('nameError')
            break;
            case this.value.trim().length < 5:
            $('nameError').innerHTML = "El nombre debe tener mínimo 5 carácteres"          
    break;
    
        default:

            break;
    }
})

inputName.addEventListener('focus', function(){
    this.classList.remove('nameError')
    $('nameError').innerHTML = null
})

inputPrice.addEventListener('blur', function(){
    switch (true) {
        case !this.value.trim():
            $('priceError').innerHTML = "El precio del producto es obligatorio"
            this.classList.add('priceError')
            break;
    
        default:
            break;
    }
})
inputPrice.addEventListener('focus', function(){
    this.classList.remove('priceError')
    $('priceError').innerHTML = null
})

textAreaDescription.addEventListener('blur', function(){
    switch (true) {
        case !this.value.trim():
            $('descriptionError').innerHTML = "La descripción del producto es obligatoria"
            this.classList.add('descriptionError')
            break;
            case this.value.trim().length < 20:
            $('descriptionError').innerHTML = "El nombre debe tener mínimo 20 carácteres"
    
        default:
            break;
    }
})
textAreaDescription.addEventListener('focus', function(){
    this.classList.remove('descriptionError')
    $('descriptionError').innerHTML = null
})

selectCategory.addEventListener('blur', function(){
    switch (true) {
        case !this.value.trim():
            $('categoryError').innerHTML = "La categoria del producto es obligatoria"
            this.classList.add('categoryError')
            break;
    
        default:
            break;
    }
})
selectCategory.addEventListener('focus', function(){
    this.classList.remove('categoryError')
    $('categoryError').innerHTML = null
})

inputproductType.addEventListener('blur', function(){
    switch (true) {
        case !this.value.trim():
            $('productTypeError').innerHTML = "el tipo del producto es obligatoria"
            this.classList.add('productTypeError')
            break;
    
        default:
            break;
    }
})
inputproductType.addEventListener('focus', function(){
    this.classList.remove('productTypeError')
    $('productTypeError').innerHTML = null
})


inputDiscount.addEventListener('blur', function(){
    switch (true) {
        case !this.value.trim():
            $('discountError').innerHTML = "El descuento del producto es obligatorio"
            this.classList.add('discountError')
            break;
    
        default:
            break;
    }
})
inputDiscount.addEventListener('focus', function(){
    this.classList.remove('discountError')
    $('discountError').innerHTML = null
})


inputDiscount.addEventListener('blur', function(){
    switch (true) {
        case !this.value.trim():
            $('Error').innerHTML = "El nombre del producto es obligatorio"
            break;
    
        default:
            break;
    }
})


// El peso no es obligatorio
// inputweight.addEventListener('blur', function(){
//     switch (true) {
//         case !this.value.trim():
//             $('weightError').innerHTML = "El peso del producto es obligatorio"
//             this.classList.add('wightError')
//             break;
    
//         default:
//             break;
//     }
// })
// inputweight.addEventListener('focus', function(){
//     this.classList.remove('weightError')
//     $('weightError').innerHTML = null
// })


inputStock.addEventListener('blur', function(){
    switch (true) {
        case !this.value.trim():
            $('stockError').innerHTML = "El stock del producto es obligatorio"
            this.classList.add('stockError')
            break;
    
        default:
            break;
    }
})
inputStock.addEventListener('focus', function(){
    this.classList.remove('stockError')
    $('stockError').innerHTML = null
})

const regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
inputImages.addEventListener('blur', function(){
    switch (true) {
        case !this.value.trim():
            $('imagesError').innerHTML = "La imagen del producto es obligatoria"
            this.classList.add('imagesError')
            break;
            case !regExExt.exec(this.value):
    $("imagesError").innerHTML = "Solo se admiten imágenes jpg, jpeg, png, gif, webp"
    break;
    
        default:
            break;

    }
})
inputImages.addEventListener('focus', function(){
    this.classList.remove('imagesError')
    $('imagesError').innerHTML = null
})





//console.log(productCreate);//


productCreate.addEventListener("submit", function (event) {
    event.preventDefault();
    let error = false;
    for (let i = 0; i < this.elements.length - 3; i++) {

      if (!this.elements[i].value || this.elements[i].classList.contains("nameError", "priceError", "descriptionError","categoryError", "productTypeError", "discountError")) {
        error = true
      }

    }

    if (!error) {
      this.submit()
    } else {
      for (let i = 0; i < this.elements.length - 3; i++) {

        !this.elements[i].value && this.elements[i].classList.add("imagesError")

        if(this.elements[i].id === "images" && this.elements[i].files.length === 0 ){
          
          $("imagesError").classList.add("imagesError")
        } 

      }
      $("error-form").innerHTML = "Los campos señalados son obligatorios."
    }
})


