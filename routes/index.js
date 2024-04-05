const express = require('express');
const router = express.Router();


const tareasRouter = require('./tareas');
router.use('/tareas', tareasRouter);

<<<<<<< HEAD
const responsablesRouter = require('./responsables');
router.use('/responsables', responsablesRouter);

=======
>>>>>>> 78dfbfe0b10de7b943dd3294d509c9e0baf212f2
module.exports = router;


const express = require('express');


const tareaController = require('../modules/tarea/tarea.controller');
<<<<<<< HEAD
const responsableController = require('../modules/responsable/responsable.controller');
=======
>>>>>>> 78dfbfe0b10de7b943dd3294d509c9e0baf212f2


router.get('/', tareaController.obtenerTodasLasTareas);


router.post('/', tareaController.crearTarea);


router.get('/:id', tareaController.obtenerTareaPorId);


router.put('/:id', tareaController.actualizarTarea);


router.delete('/:id', tareaController.eliminarTarea);

<<<<<<< HEAD
router.post('/', responsableController.crearResponsable);

router.get('/', responsableController.obtenerTodosLosResponsables);

router.get('/:id', responsableController.obtenerResponsablePorId);

router.put('/:id', responsableController.actualizarResponsable);

router.delete('/:id', responsableController.eliminarResponsable);

=======
>>>>>>> 78dfbfe0b10de7b943dd3294d509c9e0baf212f2
module.exports = router;