const express = require('express');
const router = express.Router();

// Rutas relacionadas con las tareas
const tareasRouter = require('./tareas');
router.use('/tareas', tareasRouter);

module.exports = router;
