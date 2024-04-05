const express = require('express');
const router = express.Router();


const tareasRouter = require('./tareas');
router.use('/tareas', tareasRouter);

const responsablesRouter = require('./responsables');
router.use('/responsables', responsablesRouter);

module.exports = router;


const express = require('express');


const tareaController = require('../modules/tarea/tarea.controller');
const responsableController = require('../modules/responsable/responsable.controller');


router.get('/', tareaController.obtenerTodasLasTareas);


router.post('/', tareaController.crearTarea);


router.get('/:id', tareaController.obtenerTareaPorId);


router.put('/:id', tareaController.actualizarTarea);


router.delete('/:id', tareaController.eliminarTarea);

router.post('/', responsableController.crearResponsable);

router.get('/', responsableController.obtenerTodosLosResponsables);

router.get('/:id', responsableController.obtenerResponsablePorId);

router.put('/:id', responsableController.actualizarResponsable);

router.delete('/:id', responsableController.eliminarResponsable);

module.exports = router;