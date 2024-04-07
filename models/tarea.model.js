const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },

});


const Tarea = mongoose.model('Tarea', tareaSchema);

module.exports = Tarea;
