// Selección de elementos
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const loginForm = document.getElementById("loginForm");
const closeModal = document.getElementById("closeModal");


// Mostrar el modal cuando se haga clic en el botón de Login
loginBtn.addEventListener("click", () => {
  loginModal.style.display = "block"; // Mostrar el modal
});

// Cerrar el modal cuando se haga clic en el botón de cerrar
closeModal.addEventListener("click", () => {
  loginModal.style.display = "none"; // Ocultar el modal
});

// Manejar el formulario de Login
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Evitar el envío del formulario

  const usuario = document.getElementById("usuario").value.trim();
  const contraseña = document.getElementById("contraseña").value.trim();

  if (usuario && contraseña) {
    try {
      // Enviar los datos al backend
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          usuario: usuario,
          contraseña: contraseña
        })
      });
      
      const result = await response.json();

      if (response.ok) {
        alert(result.mensaje);
        loginModal.style.display = "none"; // Cerrar el modal
        loginBtn.style.display = "none"; // Ocultar el botón de login
      } else {
        alert(result.mensaje); // Mostrar mensaje de error
      }
    } catch (error) {
      alert('Error al intentar iniciar sesión');
    }
  } else {
    alert("Por favor, completa todos los campos.");
  }
});
