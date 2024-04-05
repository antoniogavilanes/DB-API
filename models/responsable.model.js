const mongoose = require('mongoose');

// Define el esquema para el modelo de responsable
const responsableSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  }
});

// Crea el modelo de responsable a partir del esquema
const Responsable = mongoose.model('Responsable', responsableSchema);

// Exporta el modelo de responsable para que pueda ser utilizado en otros archivos
module.exports = Responsable;
