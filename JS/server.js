import express from 'express';
import { json } from 'express';
import { readFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
import cors from 'cors';
app.use(cors());  // Habilita CORS en el servidor

// Obtener __dirname usando import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ahora puedes usar __dirname para la ruta estática
app.use(express.static(path.join(__dirname, 'JS')));
// Middleware para procesar JSON
app.use(json());


app.post('/api/login', (req, res) => {
  console.log('Solicitud POST recibida');
  const { usuario, contraseña } = req.body;

  // Leer el archivo productos.json
  readFile('productos.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send({ mensaje: 'Error al leer el archivo de productos' });
    }

    // Verificar si el archivo JSON se lee correctamente
    console.log("Archivo JSON leído:", data);

    // Parsear los datos JSON
    const usuarios = JSON.parse(data);

    // Verificar si el usuario y la contraseña coinciden
    const usuarioValido = usuarios.find(u => u.usuario === usuario && u.contraseña === contraseña);

    if (usuarioValido) {
      return res.status(200).json({ mensaje: 'Acceso permitido' });
    } else {
      return res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' });
    }
  });
});


const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
