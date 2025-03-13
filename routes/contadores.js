const express = require('express');
const Usuario = require('../models/usuario');
const Producto = require('../models/producto');

const router = express.Router();

router.get('/', async (req, res) => { 
    try {
        const totalUsuarios = await Usuario.countDocuments();
        const totalProductos = await Producto.countDocuments();

        res.json({
            totalUsuarios,
            totalProductos
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al contar documentos' });
    }
});

module.exports = router;
