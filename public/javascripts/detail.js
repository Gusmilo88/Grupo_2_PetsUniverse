const btnAddCart = document.querySelector('#btn-addCart')
const URL_API_SERVER = "http://localhost:3000/api";


btnAddCart.addEventListener('click',async () => {
  const id = btnAddCart.getAttribute('data-id')
  try {
    const objProductId = {
      productId: id,
    }
      
      const {ok} = await fetch(`http://localhost:3000/api/cart/addProduct`,{ 
          method:"POST",
          body: JSON.stringify(objProductId),
          headers: {
              'Content-Type':'application/json'
          }
      }).then((res) => res.json())
      
      await Swal.fire({
          title: ok ? "Producto agregado al carrito" : "Debes iniciar sesión",
          icon: ok ? 'success': 'warning',
          showConfirmButton:false,
          timer: 1200,
          background: "linear-gradient(90deg, rgba(47, 7, 67, 0.7) 0%, rgba(98, 2, 248, 0.7) 50%, rgba(0, 161, 255, 0.7) 100%)",
          color: "white"
      })

       !ok && (location.href = "/users/login")
  } catch (error) {
      console.log(error);
      
  }

}
)
