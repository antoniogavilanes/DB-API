const express = require('express');
const router = express.Router();
const responsableController = require('../modules/responsable/responsable.controller'); // Ajusta la ruta según la ubicación de tu controlador

router.get('/', responsableController.obtenerTodosLosResponsables);
router.post('/', responsableController.crearResponsable);
router.get('/:id', responsableController.obtenerResponsablePorId);
router.put('/:id', responsableController.actualizarResponsable);
router.delete('/:id', responsableController.eliminarResponsable);
router.get('/:responsableId/tareas', responsableController.obtenerTareasPorResponsable);

module.exports = router;
