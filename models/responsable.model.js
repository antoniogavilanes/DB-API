const mongoose = require('mongoose');

const responsableSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  }
});

const Responsable = mongoose.model('Responsable', responsableSchema);

module.exports = Responsable;