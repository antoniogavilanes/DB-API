const express = require('express');
const router = express.Router();

const responsableController = require('../modules/responsable/responsable.controller');

// Rutas para las operaciones CRUD de responsables
router.get('/', responsableController.obtenerResponsables);
router.post('/', responsableController.crearResponsable);
router.get('/:id', responsableController.obtenerResponsablePorId);
router.put('/:id', responsableController.actualizarResponsable);
router.delete('/:id', responsableController.eliminarResponsable);

module.exports = router;
