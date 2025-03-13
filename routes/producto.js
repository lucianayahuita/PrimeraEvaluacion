const express = require('express');
const Producto = require('../models/producto'); // Importar el modelo de Producto
const router = express.Router();

// Crear un nuevo documento en la colección (POST /usuarios, POST /productos).
router.post('/', async (req, res) => {
    try {
      const nuevoProducto = new Producto(req.body); // Usando el modelo de Mongoose
      await nuevoProducto.save();
      res.json(nuevoProducto);
    } catch (error) {
      console.error('Error al crear el producto:', error); // Log de error
      res.status(500).json({ error: 'Error al crear productos' });
    }
  });
  
// Obtener todos los documentos de la colección (GET /usuarios, GET /productos).
router.get('/', async (req, res) => {
    try {
        // Obtener todos los productos de la base de datos
        const productos = await Producto.find(); // Usando el modelo de Mongoose
        res.json(productos); // Respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' }); // Error 500
    }
});

//Actualizar un documento por ID (PUT /usuarios/:id, PUT /productos/:id).
router.put('/:id', async (req, res) => {  
    try {
        // Obtener el producto por su ID
        const mod_prod = await Producto.findById(req.params.id);
        // Verificar si el producto existe
        if (!mod_prod) {
            return res.status(404).json({ error: 'Producto no encontrado' });  
        }
        mod_prod.set(req.body);  
        await mod_prod.save();
        res.json(mod_prod);  
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto' }); // Error 500
    }
});
// Eliminar producto por su id
router.delete('/:id', async (req, res) => {  
    try {
        // Obtener el producto por su ID
        const el_prod = await Producto.findById(req.params.id);
        // Verificar si el producto existe
        if (!el_prod) {
            return res.status(404).json({ error: 'Producto no encontrado' });  
        }
        await Producto.deleteOne({ _id: req.params.id });
        res.json({ message: 'Producto eliminado correctamente' });  
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto' }); // Error 500
    }
});


module.exports = router;