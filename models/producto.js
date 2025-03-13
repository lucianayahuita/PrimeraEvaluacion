const mongoose = require('mongoose');

// Definir el esquema para el producto
const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true, // El nombre es obligatorio
  },
  precio: {
    type: Number,
    required: true, // El precio es obligatorio
  },
  categoria: {
    type: String,
    required: true, // La categoría es obligatoria
  }
}, {
  timestamps: true // Esto agregará createdAt y updatedAt automáticamente
});

// Crear el modelo a partir del esquema
const Producto = mongoose.model('producto', productoSchema);

// Exportar el modelo
module.exports = Producto;


