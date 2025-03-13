// middleware/contador.js
const Usuario = require('../models/usuario');
const Producto = require('../models/producto');

let operaciones = {
    total: 0,
    detalles: {},
    totalUsuarios: 0,
    totalProductos: 0
};

// Middleware para contar operaciones
const contarOperaciones = async (req, res, next) => {
    const metodo = req.method;
    const ruta = req.path;

    operaciones.total++;
    operaciones.detalles[ruta] = (operaciones.detalles[ruta] || 0) + 1;

    try {
        operaciones.totalUsuarios = await Usuario.countDocuments();
        operaciones.totalProductos = await Producto.countDocuments();
    } catch (error) {
        console.error('Error al contar documentos:', error);
    }

    next();
};

// Endpoint para obtener el contador
const obtenerContador = (req, res) => {
    res.json(operaciones);
};

module.exports = { contarOperaciones, obtenerContador };
