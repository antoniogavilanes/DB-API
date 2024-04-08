const Tarea = require('../../models/tarea.model');
const Responsable = require('../../models/responsable.model');

exports.actualizarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, responsableNombre, responsableApellido } = req.body;

    if (!nombre || !descripcion || !responsableNombre || !responsableApellido) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    let responsable = await Responsable.findOne({ nombre: responsableNombre, apellido: responsableApellido });

    if (!responsable) {
      responsable = new Responsable({ nombre: responsableNombre, apellido: responsableApellido });
      await responsable.save();
    }

    const tareaActualizada = await Tarea.findByIdAndUpdate(id, {
      nombre,
      descripcion,
      responsable: responsable._id
    }, { new: true });

    if (!tareaActualizada) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    res.json(tareaActualizada);
  } catch (error) {
    console.error('Error al actualizar la tarea:', error);
    res.status(500).json({ error: 'Error al actualizar la tarea' });
  }
};


exports.eliminarTarea = async (req, res) => {
  try {
    const { id } = req.params;

    const tarea = await Tarea.findByIdAndDelete(id);

    if (!tarea) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    res.json({ mensaje: 'Tarea eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar la tarea:', error);
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
};

exports.obtenerTareaPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const tarea = await Tarea.findById(id);

    if (!tarea) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    res.json(tarea);
  } catch (error) {
    console.error('Error al obtener la tarea:', error);
    res.status(500).json({ error: 'Error al obtener la tarea' });
  }
};

exports.obtenerTodasLasTareas = async (req, res) => {
  try {

    const tareas = await Tarea.find().populate('responsable');

    const tareasFormateadas = tareas.map(tarea => ({
      _id: tarea._id,
      nombre: tarea.nombre,
      descripcion: tarea.descripcion,
      responsableNombre: tarea.responsable ? tarea.responsable.nombre : 'Responsable no especificado',
      responsableApellido: tarea.responsable ? tarea.responsable.apellido : 'Responsable no especificado'
    }));

    res.json(tareasFormateadas);
  } catch (error) {
    console.error('Error al obtener las tareas:', error);
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
};



exports.crearTarea = async (req, res) => {
  try {
    const { nombre, descripcion, responsableNombre, responsableApellido } = req.body;

    if (!nombre || !descripcion || !responsableNombre || !responsableApellido) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    let responsable = await Responsable.findOne({ nombre: responsableNombre, apellido: responsableApellido });

    if (!responsable) {
      responsable = new Responsable({ nombre: responsableNombre, apellido: responsableApellido });
      await responsable.save();
    }

    const nuevaTarea = await Tarea.create({ nombre, descripcion, responsable: responsable._id });

    res.status(201).json({ mensaje: 'Tarea creada correctamente', tarea: nuevaTarea });
  } catch (error) {
    console.error('Error al crear la tarea:', error);
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
};