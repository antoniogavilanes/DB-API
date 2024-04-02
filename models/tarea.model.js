const mongoose = require('mongoose');

// Definir el esquema de la tarea
const tareaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  // Otros campos de la tarea...
});

// Crear el modelo de la tarea basado en el esquema
const Tarea = mongoose.model('Tarea', tareaSchema);

module.exports = Tarea;