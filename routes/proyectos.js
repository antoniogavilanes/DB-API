const express = require('express');
const router = express.Router();
const proyectoController = require('../modules/proyecto/proyecto.controller');


router.get('/', proyectoController.obtenerTodosLosProyectos);


router.post('/', proyectoController.crearProyecto);


router.get('/:id', proyectoController.obtenerProyectoPorId);


router.put('/:id', proyectoController.actualizarProyecto);


router.delete('/:id', proyectoController.eliminarProyecto);

module.exports = router;
    