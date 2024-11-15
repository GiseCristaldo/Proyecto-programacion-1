import { ItemCarrito } from "../../classes/carrito.js";
import { Producto } from "../../classes/Producto.js"; // Asegúrate de que la ruta sea correcta

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Cargado");

    // Verificar el estado del localStorage
    console.log("Contenido del localStorage:");
    //console.log("productos:", localStorage.getItem('productos'));
    //console.log("carrito:", localStorage.getItem('carrito'));
    // Cargar productos y carrito
    Producto.cargarDelLocalStorage();
    console.log("Productos cargados:", Producto.items);

    ItemCarrito.cargaDelLocalStorage();
    //console.log("Carrito cargado:", ItemCarrito.itemsCarrito);
    mostrarCarrito();
});


document.addEventListener('DOMContentLoaded', function () {
    Producto.cargarDelLocalStorage();
    console.log(JSON.parse(localStorage.getItem('productos')));
    ItemCarrito.cargaDelLocalStorage();
    mostrarCarrito();
})
function calcularTotales() {
    let subtotal = 0;
    ItemCarrito.itemsCarrito.forEach(item => {
        subtotal += item.producto.precio * item.cantidad;
    });
    return {
        subtotal: subtotal,
        total: subtotal
    };

}
function actualizarTotalEnDOM() {
    const totalContainer = document.getElementById('total-container');
    const totales = calcularTotales();
    totalContainer.innerHTML = ` 
<div class=" font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">

    <div class="grid grid-cols-subgrid gap-4  mt-8">
                
    <div class="grid grid-cols-subgrid gap-4 col-span-3md:col-span-2 space-y-4 bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
                    <ul class="text-gray-800 space-y-4">
                        <li class="flex flex-wrap gap-4 text-sm">Subtotal <span class="ml-auto font-bold">$ ${totales.subtotal.toLocaleString()}</span></li>
                        
                        <hr class="border-gray-300" />
                        <li class="flex flex-wrap gap-4 text-sm font-bold">Total <span class="ml-auto">$ ${totales.total.toLocaleString()}</span></li>
                    </ul>

                    <div class="mt-8 space-y-2">
                        <button type="button" class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-lime-700 hover:bg-lime-600 text-white rounded-md">Finalizar compra</button>
                        <button type="button" class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-lime-100 hover:bg-lime-200 text-gray-700 border border-gray-200 rounded-md"><a href="home.html">Continuar comprando </a></button>
                    </div>

</div>
    `
}


function mostrarCarrito() {
    let carritoContainer = document.getElementById('carrito-container');
    const totalContainer = document.getElementById('total-container');
    carritoContainer.innerHTML = '';

    if (ItemCarrito.itemsCarrito.length === 0) {
        carritoContainer.innerHTML = `
       <div class="flex items-center justify-center h-screen">
  <p class="text-4xl font-semibold text-gray-700 text-center">
    🛒 El carrito está vacío
  </p>
  </div>
  <div class="flex items-center justify-center h-screen>
    <a href="home.html" class="text-2xl font-semibold text-lime-400 underline">
      Volver a la tienda
    </a>
  </div>`


        totalContainer.innerHTML = '';
        return
    }
    carritoContainer.innerHTML += `
    <div class="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">
        <div class="flex justify-between items-center px-4 py-2 border-b border-gray-300">
            <span class="text-gray-500 font-semibold">Producto</span>
            <span class="text-gray-500 font-semibold">Precio</span>
        </div>
    </div>
`;
    ItemCarrito.itemsCarrito.forEach(item => {

        const div = document.createElement('div');
        div.classList.add('carrito-item');
        div.innerHTML = `
  
 <div class="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">
            <div class="grid md:grid-cols-1 gap-4 mt-8">
                <div class="md:col-span-2 space-y-4">
                    <div class="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
                        <div class="flex gap-4">
                            <div class="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                                <img src="${item.producto.imagen}" alt="${item.producto.nombre}" class="product-image" class="w-full h-full object-contain" />
                            </div>

                            <div class="flex flex-col gap-4">
                                <div>
                                <div class="producto-info justify-between">
               
                                    <h3 class="text-base font-bold text-gray-600"class="product-name">${item.producto.nombre}</h3>
                                   
                                    <p class="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2"> <span class="inline-block w-5 h-5 rounded-md"></span></p>
                                </div>

                                <div class="mt-auto flex items-center gap-3">
                                    <button type="button" class="decrementar flex items-center justify-center w-5 h-5 bg-lime-200 outline-none rounded-full" data-codigo="${item.producto.codigo}"> -    
                                    </button>
                                    <span class="font-bold text-sm leading-[18px]class="cantidad">${item.cantidad}</span>
                                    <button type="button"class="incrementar flex items-center justify-center w-5 h-5 bg-lime-200 outline-none rounded-full"  data-codigo="${item.producto.codigo}"> +
                    
                                </div>
                            </div>

                        </div> 
                        
                        </div>
        <div class="ml-auto flex flex-col justify-end"> 
     <h3 class="product-precio text-base font-bold text-gray-700">$ ${item.producto.precio.toLocaleString()}</h3>  
     <button type="button" class="eliminar-carrito text-red-500 text-sm mt-4" data-codigo="${item.producto.codigo}">Eliminar</button>
      </div>
     <div>   
           
        `;
        carritoContainer.appendChild(div);
    });
    actualizarTotalEnDOM();

}
// Escuchar los eventos para los botones de +, -, y eliminar
document.getElementById('carrito-container').addEventListener('click', (event) => {
    const codigo = event.target.dataset.codigo;
    if (!codigo) return;

    if (event.target.classList.contains('incrementar')) {
        const item = ItemCarrito.itemsCarrito.find(item => item.producto.codigo === codigo);
        if (item) {
            item.cantidad += 1;
            ItemCarrito.guardarEnLocalStorage();
            mostrarCarrito();
        }
    } else if (event.target.classList.contains('decrementar')) {
         ItemCarrito.decrementar(codigo);
            mostrarCarrito();
        }
     else if (event.target.classList.contains('eliminar-carrito')) {
        ItemCarrito.eliminarDelCarrito(codigo);
        mostrarCarrito();
    }
});