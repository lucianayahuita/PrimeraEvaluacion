const express = require('express');
const Usuario = require('../models/usuario'); // Importar el modelo de Producto
const router = express.Router();

// Crear un nuevo documento en la colección (POST /usuarios, POST /productos).
router.post('/', async (req, res) => {
    try {
      const nuevoUsuario = new Usuario(req.body); // Usando el modelo de Mongoose
      await nuevoUsuario.save();
      res.json(nuevoUsuario);
    } catch (error) {
      console.error('Error al crear usuario:', error); // Log de error
      res.status(500).json({ error: 'Error al crear usuario' });
    }
  });
  
// Obtener todos los documentos de la colección (GET /usuarios, GET /productos).
router.get('/', async (req, res) => {
    try {
        // Obtener todos los productos de la base de datos
        const usuarios = await Usuario.find(); // Usando el modelo de Mongoose
        res.json(usuarios); // Respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' }); // Error 500
    }
});

//Actualizar un documento por ID (PUT /usuarios/:id, PUT /productos/:id).
router.put('/:id', async (req, res) => {  
    try {
        // Obtener el producto por su ID
        const mod_us = await Usuario.findById(req.params.id);
        // Verificar si el producto existe
        if (!mod_us) {
            return res.status(404).json({ error: 'Usuario no encontrado' });  
        }
        mod_us.set(req.body);  
        await mod_us.save();
        res.json(mod_us);  
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' }); // Error 500
    }
});
// Eliminar producto por su id
router.delete('/:id', async (req, res) => {  
    try {
        // Obtener el producto por su ID
        const el_us = await Usuario.findById(req.params.id);
        // Verificar si el producto existe
        if (!el_us) {
            return res.status(404).json({ error: 'Producto no encontrado' });  
        }
        await Usuario.deleteOne({ _id: req.params.id });
        res.json({ message: 'Usuario eliminado correctamente' });  
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto' }); // Error 500
    }
});


module.exports = router;