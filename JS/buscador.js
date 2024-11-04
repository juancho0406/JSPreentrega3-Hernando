/*Buscador */

// declaracion de los elementos
const input = document.getElementById("input");
const buscador = document.getElementById("buscador");
const productos = document.querySelectorAll(".producto");

// Evitar que el formulario recargue la página
buscador.addEventListener("submit", (event) => {
    event.preventDefault();
    buscarProducto();
  });

  // Filtrar productos en tiempo real
input.addEventListener("input", buscarProducto);

// Función para buscar productos
function buscarProducto() {
    const texto = input.value.toLowerCase(); // Convertir el texto a minúsculas
  
    productos.forEach((producto) => {
      const titulo = producto.querySelector(".card-title").textContent.toLowerCase();
      if (titulo.includes(texto)) {
        producto.style.display = "block"; // Mostrar el producto si coincide
      } else {
        producto.style.display = "none"; // Ocultar el producto si no coincide
      }
    });
  }

