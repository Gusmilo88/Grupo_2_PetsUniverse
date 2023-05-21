const $ =(el)=>document.querySelector(el)
const btnPrev = $('#btn-prev')



const btnnext = $('#btn-next')
const containerItemsPage = $('#container-items-page')
const containerCard = $('#container-products-card')
const productosTipo =$("#productos_tipo")
const productosOrden =$("#producto_orden")

const apiGetProducts = 'http://localhost:3000/api/products'
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
    
       console.log(image)
        const template = `
        <div class="header products_main_producto">
        <a href="/products/productDetail/${id}">  
      
        <div class="products_main_producto--img">
        <img src="${image}" class="card-img-top" alt="...">




    </div>
</a>
<div class="products_main_producto--description">
    <div class="card-body">
        <span class="price-products-dog-cat">$ ${price}</span>
        <h5 >${name}</h5>
    </div>






        </div>
                                    
    </div>



    `

    containerCard.innerHTML += template
    });
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
    
        containerItemsPage.innerHTML += `<li class="page-item ${itemActive === i && 'active'}"><a class="page-link" href="#" onclick="getFilter(${filtro},'${precio}',${i})">${i}</a></li>`
    }
    productosTipo.innerHTML = ''
   
    
    productosTipo.innerHTML += `<li class="product_main--li"><a class="product_main--a" href="#" onclick="getFilter(1,'${precio}',1)">Alimento</a></li>`
    productosTipo.innerHTML += `<li class="product_main--li"><a class="product_main--a" href="#" onclick="getFilter(2,'${precio}',1)">juguetes</a></li>`
    productosTipo.innerHTML += `<li class="product_main--li"><a class="product_main--a" href="#" onclick="getFilter(3,'${precio}',1)">Salud</a></li>`
    /* filtroChef.innerHTML += `<a class="page-link" href="#" onclick="getFilter(0,'${precio}',1)">todos los productos</a>` */
    productosOrden.innerHTML = ''
    productosOrden.innerHTML += `<li class="product_main--li"><a class="product_main--a" href="#" onclick="getFilter(${filtro},'asc',1)">asc</a></li>`
    productosOrden.innerHTML += `<li class="product_main--li"><a class="product_main--a" href="#" onclick="getFilter(${filtro},'desc',1)">desc</a></li>`
    
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




 