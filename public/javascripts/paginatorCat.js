const $ =(el)=>document.querySelector(el)
const btnPrev = $('#btn-prev')

const URL_API_SERVER = "http://localhost:3000/api"



const btnnext = $('#btn-next')
const containerItemsPage = $('#container-items-page')
const containerCard = $('#container-products-card')
const productosTipo =$("#productos_tipo")
const productosOrden =$("#producto_orden")
const todoProducto = $("#todo-producto")

const apiGetProducts = 'http://localhost:3000/api/products/gatos'
const getCourses = ({page=1,productType=0,price="false"}={})=>{
    return fetch(`${apiGetProducts}?page=${page}&productType=${productType}&price=${price}`).then(res => res.json())
}


window.addEventListener('load',async()=>{

    try {
        const {data:{pages,currentPage,products,numero,precios}} = await getCourses()
        paintCourses(products)
        paintItemsPage({numberPages:pages,itemActive:currentPage})
        paintItemsfilter({filtro:numero,precio:precios,numberPages:pages,itemActive:currentPage})

    } catch (error) {
        console.log(error)
    }

}) 










console.log(getCourses()) 

let pageActive
const paintCourses = (products)=>{
    containerCard.innerHTML = ''
    products.forEach(({name,image,id,price}) => {
        const priceFormatARG = price.toLocaleString("es-AR", { style: "currency", currency: "ARS"})
    console.log(image)
        const template = `
        <div class="header products_main_producto" style="background:${window.localStorage.getItem('lpm') === "true" ? '#ffffff26':'linear-gradient(270deg, rgba(255, 255, 255, 0.07) 0%, rgba(2, 152, 227, 0.7) 33.33%, rgba(1, 58, 87, 0.7) 66.67%, rgba(0, 0, 0, 0.7) 100%);'}">
        <a href="/products/productDetail/${id}">  

        <div class="products_main_producto--img">
        <img src="${image}" class="card-img-top" alt="...">




    </div>
</a>
<div class="products_main_producto--description">
    <div class="card-body">
        <span class="price-products-dog-cat"> ${priceFormatARG}</span>
        <h5 >${name}</h5>
        <div class ="d-flex justify-content-center">
<button class="btn btn-success" onclick="addProductToCart(${id})">Agregar a carrito</button>
</div>
    </div>






        </div>
                                    
    </div>



    `

    containerCard.innerHTML += template
    });
} 


const addProductToCart = async (id) => {
    try {
        
        const {ok} = await fetch(`http://localhost:3000/api/cart/addProduct`,{ 
            method:"POST",
            body: JSON.stringify({
                productId: id
            }),
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



const paintItemsPage =({numberPages,itemActive})=>{
    containerItemsPage.innerHTML = ''
    for (let i = 1; i <= numberPages; i++) {
    
        containerItemsPage.innerHTML += `<li class="page-item ${itemActive === i && 'active'}"><a class="page-link" href="#" onclick="getPage(${i})">${i}</a></li>`
    }
} 

/* const paintItemsFiltro =()=>{
    productosTipo.innerHTML=''

    productosTipo.innerHTML += '<li class="product_main--li"><a href="/api/products/?productType=2" class="product_main--a" onclick="getfiltro()>Juguetes</a></li>'
} */


const paintItemsfilter =({filtro,precio,numberPages,itemActive} )=>{
    containerItemsPage.innerHTML = ''
    for (let i = 1; i <= numberPages; i++) {
    
        containerItemsPage.innerHTML += `<li class="page-item  ${itemActive === i && 'active'}"><a class="page-link" href="#" onclick="getFilter(${filtro},'${precio}',${i})" style="color:white;background: ${itemActive === i ? 'black' :'linear-gradient(90deg, rgba(47, 7, 67, 0.6) 0%, rgba(98, 2, 248, 0.6) 50%, rgba(0, 161, 255, 0.6) 100%)'}"      >${i}</a></li>`
    }
    productosTipo.innerHTML = ''
    todoProducto.innerHTML = ''
    
    productosTipo.innerHTML += `<li class="product_main--li"><a class="product_main--a" href="#" onclick="getFilter(1,'${precio}',1)"  style="background:${filtro === 1 ? '#000000b5': ""}">Alimento</a></li>`
    productosTipo.innerHTML += `<li class="product_main--li"><a class="product_main--a" href="#" onclick="getFilter(2,'${precio}',1)" style="background:${filtro === 2 ? '#000000b5': ""}">juguetes</a></li>`
    productosTipo.innerHTML += `<li class="product_main--li"><a class="product_main--a" href="#" onclick="getFilter(3,'${precio}',1)" style="background:${filtro === 3 ? '#000000b5': ""}">Salud</a></li>`
    todoProducto.innerHTML += `<li class="product_main--li"><a class="product_main--a" href="#" onclick="getFilter(0,'false',1)">Todos los productos</a></li>`
    productosOrden.innerHTML = ''
    productosOrden.innerHTML += `<li class="product_main--li"><a class="product_main--a" href="#" onclick="getFilter(${filtro},'asc',1)" style="background:${precio === 'asc' ? '#000000b5': ""}">Menor Precio</a></li>`
    productosOrden.innerHTML += `<li class="product_main--li"><a class="product_main--a" href="#" onclick="getFilter(${filtro},'desc',1)" style="background:${precio === 'desc' ? '#000000b5': ""}">Mayor Precio</a></li>`
    
}


const getFilter = async (productType,price,page)=>{
    /*  pageActive =page */
    const {data:{count,pages,currentPage,products,numero,precios}} = await getCourses({productType,price,page});
    paintCourses(products)
    paintItemsfilter({filtro:numero,precio:precios,numberPages:pages,itemActive:currentPage})
        
} 






/* const getfiltro = async (productType)=>{
    
    const {data:{count,pages,currentPage,products,productType}} = await getCourses({productType});
    paintCourses(productType)
        paintItemsPage({numberPages:pages,itemActive:currentPage})
}  */







const getPage = async (page)=>{
    pageActive =page
    const {data:{count,pages,currentPage,products}} = await getCourses({page});
    paintCourses(products)
        paintItemsPage({numberPages:pages,itemActive:currentPage})
} 




