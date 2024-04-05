
const Tarea = require('../../models/tarea.model');


exports.actualizarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const tareaActualizada = req.body; 


    const tarea = await Tarea.findByIdAndUpdate(id, tareaActualizada, { new: true });

    if (!tarea) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    res.json(tarea);
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

    res.json(tareas);
  } catch (error) {
    console.error('Error al obtener las tareas:', error);
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
};



exports.crearTarea = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;


    if (!nombre || !descripcion) {
      return res.status(400).json({ error: 'El nombre y la descripción son obligatorios' });
    }


    const tarea = await Tarea.create({ nombre, descripcion });

    res.status(201).json({ mensaje: 'Tarea creada correctamente', tarea });
  } catch (error) {
    console.error('Error al crear la tarea:', error);
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
}
