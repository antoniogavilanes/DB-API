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
<<<<<<< HEAD
  responsable: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'responsable'
  }
=======

>>>>>>> 78dfbfe0b10de7b943dd3294d509c9e0baf212f2
});


const Tarea = mongoose.model('Tarea', tareaSchema);

<<<<<<< HEAD
module.exports = Tarea;
=======
module.exports = Tarea;
>>>>>>> 78dfbfe0b10de7b943dd3294d509c9e0baf212f2
