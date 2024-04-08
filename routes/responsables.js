const express = require('express');
const router = express.Router();
const responsableController = require('../modules/responsable/tarea.controller');

router.get('/', responsableController.obtenerTodosLosResponsables);

router.post('/', responsableController.crearResponsable);

router.get('/:id', responsableController.obtenerResponsablePorId);

router.put('/:id', responsableController.actualizarResponsable);

router.delete('/:id', responsableController.eliminarResponsable);

module.exports = router;