const express = require('express');
const router = express.Router();


const tareasRouter = require('./tareas');
router.use('/tareas', tareasRouter);

module.exports = router;


const express = require('express');


const tareaController = require('../modules/tarea/tarea.controller');


router.get('/', tareaController.obtenerTodasLasTareas);


router.post('/', tareaController.crearTarea);


router.get('/:id', tareaController.obtenerTareaPorId);


router.put('/:id', tareaController.actualizarTarea);


router.delete('/:id', tareaController.eliminarTarea);



module.exports = router;