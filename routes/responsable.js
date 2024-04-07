const express = require('express');
const router = express.Router();

const responsableController = require('../modules/responsable/responsable.controller');


router.get('/', responsableController.obtenerResponsables);

router.post('/', responsableController.crearResponsable);

router.get('/:id', responsableController.obtenerResponsablePorId);

router.put('/:id', responsableController.actualizarResponsable);

module.exports = router;
