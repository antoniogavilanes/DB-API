const mongoose = require('mongoose');

const responsableSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  proyectos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Proyecto'
  }]
});

const Responsable = mongoose.model('Responsable', responsableSchema);

module.exports = Responsable;
