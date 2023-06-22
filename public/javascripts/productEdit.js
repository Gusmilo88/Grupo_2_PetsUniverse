const $ = id => document.getElementById(id)
const productEdit = $('form-product-edit')
const inputName = $('name');
const textAreaDescription = $('description');
const selectCategory = $('category');
const inputproductType = $('productType');
const inputPrice = $('price');
const inputDiscount = $('discount');
const inputweight = $('weight');
const inputStock = $('stock');
const inputImages = $('image');

$('priceError').hidden = true
$("nameError").hidden = true
$('descriptionError').hidden = true
$('categoryError').hidden = true
$('productTypeError').hidden = true
$('discountError').hidden = true
$('stockError').hidden = true
$('imagesError').hidden = true




       

        inputName.addEventListener('blur', function(){
            switch (true) {
                case !this.value.trim():
                    $("nameError").innerHTML = "El nombre del producto es obligatorio"
                    this.classList.add('nameError')
                    $("nameError").hidden = false
                    break;
                    case this.value.trim().length < 5:
                    $("nameError").innerHTML = "El nombre debe tener mínimo 5 carácteres"  
                    this.classList.add('nameError')  
                    $('nameError').hidden = false      
            break;
            
                default:
        
                    break;
            }
        })







        inputName.addEventListener('focus', function(){
            this.classList.remove('nameError')
            $('nameError').innerHTML = null
            $('nameError').hidden = true
        })
        textAreaDescription.addEventListener('blur', function(){
            switch (true) {
                case !this.value.trim():
                    $('descriptionError').innerHTML = "La descripción del producto es obligatorio"  
                    this.classList.add('descriptionError')
                    $('descriptionError').hidden = false
                break;
                    case this.value.trim().length < 20:
                    $('descriptionError').innerHTML = "La descripción debe tener mínimo 20 carácteres" 
                    $('descriptionError').hidden = false         
            break;
            
                default:

                    break;
            }
        })
        textAreaDescription.addEventListener('focus', function(){
            this.classList.remove('descriptionError')
            $('descriptionError').innerHTML = null
            $('descriptionError').hidden = true
        })

        inputPrice.addEventListener('blur', function(){
            switch (true) {
                case !this.value.trim():
                    $('priceError').innerHTML = "El precio del producto es obligatorio"
                    this.classList.add('priceError')
                    $('priceError').hidden = false
                    break;
            
                default:
                    break;
            }
        })
        inputPrice.addEventListener('focus', function(){
            this.classList.remove('priceError')
            $('priceError').innerHTML = null
            $('priceError').hidden = true
        })

        inputDiscount.addEventListener('blur', function(){
            switch (true) {
                case !this.value.trim():
                    $('discountError').innerHTML = "El descuento del producto es obligatorio"
                    this.classList.add('discountError')
                    $('discountError').hidden = false
                    break;
            
                default:
                    break;
            }
        })
        inputDiscount.addEventListener('focus', function(){
            this.classList.remove('discountError')
            $('discountError').innerHTML = null
            $('discountError').hidden = true
        })

        inputStock.addEventListener('blur', function(){
            switch (true) {
                case !this.value.trim():
                    $('stockError').innerHTML = "El stock del producto es obligatorio"
                    this.classList.add('stockError')
                    $('stockError').hidden = false
                    break;
            
                default:
                    break;
            }
        })
        inputStock.addEventListener('focus', function(){
            this.classList.remove('stockError')
            $('stockError').innerHTML = null
            $('stockError').hidden = true
        })

        const regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
        inputImages.addEventListener('blur', function(){
            switch (true) {
                case !this.value.trim():
                    $('imageError').innerHTML = "La imagen del producto es obligatoria"
                    this.classList.add('imageError')
                    $('imageError').hidden = false
                    break;
                    case !regExExt.exec(this.value):
            $("imageError").innerHTML = "Solo se admiten imágenes jpg, jpeg, png, gif, webp"
            $('imageError').hidden = false
            break;
            
                default:

                    break;
            }
        })
        inputImages.addEventListener('focus', function(){
            this.classList.remove('imageError')
            $('imageError').innerHTML = null
            $('imageError').hidden = true
        })
/*         console.log(productEdit) */

productEdit.addEventListener("submit", function (event) {
    event.preventDefault();
    let error = false;
    for (let i = 0; i < this.elements.length - 3; i++) {

      if (!this.elements[i].value || this.elements[i].classList.contains("nameError", "priceError", "descriptionError","categoryError", "discountError", "stockError")) {
        error = true
      }

    }

    if (!error) {
      this.submit()
    } else {
      for (let i = 0; i < this.elements.length - 3; i++) {

        !this.elements[i].value && this.elements[i].classList.add("imageError")

        if(this.elements[i].id === "image" && this.elements[i].files.length === 0 ){
          
          $("imageError").classList.add("imageError")
        } 

      }
      $("error-form").innerHTML = "Los campos señalados son obligatorios."
    }
})
