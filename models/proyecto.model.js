const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proyectoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  responsables: [{
    type: Schema.Types.ObjectId,
    ref: 'Responsable'
  }],
  fechaEntrega: { 
    type: Date, required: true }
});

const Proyecto = mongoose.model('Proyecto', proyectoSchema);

module.exports = Proyecto;
