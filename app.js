const express = require('express');
const app = express();
const { contarOperaciones, obtenerContador } = require('./middleware/contador');

// Middleware para manejar JSON
app.use(express.json());
app.use(contarOperaciones);
// Importar rutas 
app.use('/api/productos', require('./routes/producto'));
app.use('/api/usuarios', require('./routes/usuario'));
app.use('/api/contadores', require('./routes/contadores'));  
app.get('/operaciones', obtenerContador);

module.exports = app; // Exportar la app para iniciar el servidor en otro archivo
