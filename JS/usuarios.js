const express = require('express');
const fs = require('fs');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta para manejar el inicio de sesión
app.post('/api/login', (req, res) => {
  const { usuario, contraseña } = req.body;

  // Leer el archivo usuarios.json
  fs.readFile('usuarios.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error al leer el archivo de usuarios');
    }

    // Parsear los datos JSON
    const usuarios = JSON.parse(data);

    // Verificar si el usuario y la contraseña coinciden
    const usuarioValido = usuarios.find(u => u.usuario === usuario && u.contraseña === contraseña);

    if (usuarioValido) {
      // Si el usuario es válido, permitir el acceso
      return res.status(200).json({ mensaje: 'Acceso permitido' });
    } else {
      // Si no coinciden, negar el acceso
      return res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' });
    }
  });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});