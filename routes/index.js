const express = require('express');
const router = express.Router();


const tareasRouter = require('./tareas');
router.use('/tareas', tareasRouter);

const responsablesRouter = require('./responsables');
router2.use('/responsables', responsablesRouter);

module.exports = router;
module.exports = router2;


const express = require('express');


const tareaController = require('../modules/tarea/tarea.controller');
const responsableController = require('../modules/responsable/responsable.controller');


router.get('/', tareaController.obtenerTodasLasTareas);


router.post('/', tareaController.crearTarea);


router.get('/:id', tareaController.obtenerTareaPorId);


router.put('/:id', tareaController.actualizarTarea);


router.delete('/:id', tareaController.eliminarTarea);

router.get('/', responsableController.obtenerResponsables);

router.post('/', responsableController.crearResponsable);

router.get('/:id', responsableController.obtenerResponsablePorId);

router.put('/:id', responsableController.actualizarResponsable);

module.exports = router;
module.exports = router2;
