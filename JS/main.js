// Selección de elementos
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const loginForm = document.getElementById("loginForm");
const closeModal = document.getElementById("closeModal");

// Comprobar si ya hay un usuario guardado en localStorage al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const nombreGuardado = localStorage.getItem("nombre");
  const apellidoGuardado = localStorage.getItem("apellido");

  if (nombreGuardado && apellidoGuardado) {
    mostrarSaludo(nombreGuardado, apellidoGuardado);
    loginBtn.style.display = "none"; // Ocultar el botón de login
  }
});

// Mostrar el modal cuando se haga clic en el botón de Login
loginBtn.addEventListener("click", () => {
  loginModal.style.display = "block"; // Mostrar el modal
});

// Cerrar el modal cuando se haga clic en el botón de cerrar
closeModal.addEventListener("click", () => {
  loginModal.style.display = "none"; // Ocultar el modal
});

// Manejar el formulario de Login
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar el envío del formulario
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();

  if (nombre && apellido) {
    // Guardar los datos en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);

    // Mostrar saludo y ocultar el modal
    mostrarSaludo(nombre, apellido);
    loginModal.style.display = "none"; // Cerrar el modal

    // Ocultar el botón de Login
    loginBtn.style.display = "none";
  } else {
    alert("Por favor, completa todos los campos.");
  }
});

// Función para mostrar el saludo
function mostrarSaludo(nombre, apellido) {
  const saludoContainer = document.createElement("div");
  saludoContainer.className = "text-center mt-3";
  saludoContainer.innerHTML = `<h4>Hola, ${nombre} ${apellido}!</h4>`;
  document.body.prepend(saludoContainer);
}
