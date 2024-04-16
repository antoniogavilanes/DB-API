const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tareaSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  responsable: { type: Schema.Types.ObjectId, ref: 'Responsable' },
  fechaEntrega: { type: Date, required: true }
});

module.exports = mongoose.model('Tarea', tareaSchema);