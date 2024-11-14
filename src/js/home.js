import { Producto } from '/classes/Producto.js'
import { ItemCarrito } from "/classes/carrito.js";

document.addEventListener('DOMContentLoaded', function () {
    console.log('esto cargo');
    Producto.cargarDelLocalStorage();
    ItemCarrito.cargaDelLocalStorage();


    let productoConteiner = document.getElementById('lista-product');

    Producto.items.forEach((producto) => {
        //creamos a la vez una nueva fila tr para cada producto
        const card = document.createElement('div');
        card.classList.add('producto-card');

        card.innerHTML = `
      
         <div class="w-full max-w-sm bg-lime-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img src="${producto.imagen}" alt="Imagen del producto" class= "product-image" p-8 rounded-t-lg"/>
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-700 dark:text-white class="product-name">${producto.nombre}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-lime-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-lime-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-lime-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-lime-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-lime-100 text-lime-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-lime-200 dark:text-lime-400 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-1.5xl font-bold text-gray-700 dark:text-whiteclass="product-precio">$ ${producto.precio}</span>
            <a href="#" class="text-white bg-lime-500 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-300 font-small rounded-lg text-sm px-2 py-2 text-center dark:bg-lime-400 dark:hover:bg-lime-300 dark:focus:ring-lime-800 agregar-carrito" data-codigo="${producto.codigo}">Agregar al carrito</a>
        </div>
    </div>
</div>
</div>
     
        `;
        productoConteiner.appendChild(card);
    });

    //agregamos el producto al carrito
    productoConteiner.addEventListener('click', (event) => {
        if (event.target.classList.contains('agregar-carrito')) {
            let codigo = event.target.dataset.codigo;
            let producto = Producto.items.find(p => p.codigo === codigo);
            if (producto) {
                console.log("Producto a agregar:", producto);
                ItemCarrito.agregarAlCarrito(producto);
                alert('Producto agregado al carrito');
                actualizarBotonCarrito();
                // Verificar el estado del carrito después de agregar
            console.log("Estado del carrito:", ItemCarrito.itemsCarrito);
            console.log("LocalStorage carrito:", localStorage.getItem('carrito'));
            }
        }
    });
});

function actualizarBotonCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);
    document.getElementById('botonCarrito').textContent = `Carrito (${cantidadTotal})`;
}

//let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
//let cantidadDeProductos = carrito.length;
//document.getElementById('botonCarrito').textContent = `Carrito (${cantidadDeProductos})`;


actualizarBotonCarrito();

document.addEventListener('DOMContentLoaded', actualizarBotonCarrito);

