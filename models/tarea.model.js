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
  responsable: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Responsable'
  }

});


const Tarea = mongoose.model('Tarea', tareaSchema);

module.exports = Tarea;