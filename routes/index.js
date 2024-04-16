const express = require('express');
const router = express.Router();

const proyectosRouter = require('./proyectos');
router.use('/proyectos', proyectosRouter);

module.exports = router;
const express = require('express');

const proyectoController = require('../modules/proyecto/proyecto.controller');

// Rutas para proyectos
router.get('/', proyectoController.obtenerTodosLosProyectos);
router.post('/', proyectoController.crearProyecto);
router.get('/:id', proyectoController.obtenerProyectoPorId);
router.put('/:id', proyectoController.actualizarProyecto);
router.delete('/:id', proyectoController.eliminarProyecto);


module.exports = router;