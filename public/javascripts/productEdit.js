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
        textAreaDescription.addEventListener('blur', function(){
            switch (true) {
                case !this.value.trim():
                    $('descriptionError').innerHTML = "La descripción del producto es obligatorio"  
                    this.classList.add('descriptionError')
                break;
                    case this.value.trim().length < 20:
                    $('descriptionError').innerHTML = "La descripción debe tener mínimo 20 carácteres"          
            break;
            
                default:

                    break;
            }
        })
        textAreaDescription.addEventListener('focus', function(){
            this.classList.remove('descriptionError')
            $('descriptionError').innerHTML = null
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
                    $('imageError').innerHTML = "La imagen del producto es obligatoria"
                    this.classList.add('imageError')
                    break;
                    case !regExExt.exec(this.value):
            $("imageError").innerHTML = "Solo se admiten imágenes jpg, jpeg, png, gif, webp"
            break;
            
                default:

                    break;
            }
        })
        inputImages.addEventListener('focus', function(){
            this.classList.remove('imageError')
            $('imageError').innerHTML = null
        })
        console.log(productEdit)
