// Lista del carrito
let carrito = [];

// Productos disponibles
class claseProductos {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const producto1 = new claseProductos("Remeras caciques 1", 15000);
const producto2 = new claseProductos("Remeras caciques 2", 20000);
const producto3 = new claseProductos("Buzo caciques", 25000);
const producto4 = new claseProductos("Campera caciques", 35000);

const productosDisponibles = [producto1, producto2, producto3, producto4];

// Función para agregar productos al carrito
document.addEventListener("DOMContentLoaded", () => {
  // Cargar carrito desde localStorage (si existe)
  cargarCarritoDesdeStorage();
  
  // Mostrar el carrito
  actualizarCarrito();
  
  // Agregar los productos disponibles al HTML y configurar el evento de click para agregar productos
  productosDisponibles.forEach((producto, index) => {
    const botonAgregar = document.getElementById(`agregar${index}`);
    if (botonAgregar) {
      botonAgregar.addEventListener("click", () => agregarProducto(index, true));
    }
  });
});

// Función para agregar producto al carrito
function agregarProducto(productoId, manual = true) {
  const producto = productosDisponibles[productoId];
  if (producto) {
    // Comprobar si el producto ya está en el carrito
    const productoExistente = carrito.find(p => p.nombre === producto.nombre);
    
    if (productoExistente) {
      // Si el producto ya existe, aumentar su cantidad
      productoExistente.cantidad++;
    } else {
      // Si el producto no existe, agregarlo al carrito con cantidad 1
      carrito.push({...producto, cantidad: 1});
    }
  
    // Solo muestra la alerta si se agrega manualmente
    if (manual) {
      alert(`Se agregó el producto: ${producto.nombre} al carrito`);
    }
  
    actualizarCarrito();
    guardarCarritoEnStorage();
  } else {
    alert("Producto no encontrado");
  }
}

// Función para eliminar producto del carrito
function eliminarProducto(nombreProducto) {
  carrito = carrito.filter((producto) => producto.nombre !== nombreProducto);
  actualizarCarrito();
  guardarCarritoEnStorage();
}

// Función para actualizar el carrito
function actualizarCarrito() {
  const contenedorCarrito = document.querySelector(".cuadro"); 
  if (!contenedorCarrito) {
    console.error("El contenedor del carrito no existe en el DOM.");
    return;
  }

  contenedorCarrito.innerHTML = ""; // Limpiar contenido existente

  // Encabezados del carrito
  contenedorCarrito.innerHTML += `
    <div class="row">
      <div class="col-3"><strong>Cantidad</strong></div>
      <div class="col-3"><strong>Nombre</strong></div>
      <div class="col-3"><strong>Precio</strong></div>
      <div class="col-3"><strong>Acción</strong></div>
    </div>
  `;

  // Agregar los productos del carrito
  carrito.forEach((producto) => {
    contenedorCarrito.innerHTML += `
      <div class="row">
        <div class="col-3">${producto.cantidad}</div>
        <div class="col-3">${producto.nombre}</div>
        <div class="col-3">$${producto.precio * producto.cantidad}</div>
        <div class="col-3">
          <button onclick="eliminarProducto('${producto.nombre}')">Eliminar</button>
        </div>
      </div>
    `;
  });

  // Calcular el total correctamente (cantidad * precio de cada producto)
  const total = carrito.reduce((sum, producto) => sum + (producto.precio * producto.cantidad), 0);

  // Mostrar el total debajo de los productos
  const totalDiv = document.createElement("div");
  totalDiv.classList.add("total");
  totalDiv.innerHTML = `
    <div class="row">
      <div class="col-9"><strong>TOTAL</strong></div>
      <div class="col-3"><strong>$${total}</strong></div>
    </div>
  `;
  contenedorCarrito.appendChild(totalDiv);
}

// Función para guardar el carrito en localStorage
function guardarCarritoEnStorage() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para cargar el carrito desde localStorage
function cargarCarritoDesdeStorage() {
  const carritoStorage = localStorage.getItem('carrito');
  if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
  }
}
