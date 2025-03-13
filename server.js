const app = require('./app'); // Importar la configuración de la aplicación
const conexion = require('./db'); // Para importar conexión a MongoDB

const PORT = process.env.PORT || 9000;

// Para conectar a MongoDB
conexion();

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

