const mongoose = require('mongoose');

// Definir el esquema para el producto
const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true, // El nombre es obligatorio
  },
  edad: {
    type: Number,
    required: true, // El precio es obligatorio
  },
  ocupacion: {
    type: String,
    required: true, // La ocupacion es obligatoria
  }
}, {
  timestamps: true // Esto agregará createdAt y updatedAt automáticamente
});

// Crear el modelo a partir del esquema
const Producto = mongoose.model('usuario', productoSchema);

// Exportar el modelo
module.exports = Producto;


