const express = require('express');
const router = express.Router();

// Controladores de tareas
const tareaController = require('../modules/tarea/tarea.controller');

// Ruta para obtener todas las tareas
router.get('/', tareaController.obtenerTodasLasTareas);

// Ruta para crear una nueva tarea
router.post('/', tareaController.crearTarea);

// Ruta para obtener una tarea por ID
router.get('/:id', tareaController.obtenerTareaPorId);

// Ruta para actualizar una tarea existente
router.put('/:id', tareaController.actualizarTarea);

// Ruta para eliminar una tarea existente
router.delete('/:id', tareaController.eliminarTarea);

module.exports = router;
