// Importar el modelo de tarea si es necesario
const Tarea = require('../../models/tarea.model');

// Controlador para actualizar una tarea existente
exports.actualizarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const tareaActualizada = req.body; // Datos de la tarea actualizada

    // Actualizar la tarea en la base de datos
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

// Controlador para eliminar una tarea existente
exports.eliminarTarea = async (req, res) => {
  try {
    const { id } = req.params;

    // Eliminar la tarea de la base de datos
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

// Controlador para obtener una tarea por ID
exports.obtenerTareaPorId = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar la tarea en la base de datos
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

// Controlador para obtener todas las tareas
exports.obtenerTodasLasTareas = async (req, res) => {
  try {
    // Obtener todas las tareas de la base de datos
    const tareas = await Tarea.find();

    res.json(tareas);
  } catch (error) {
    console.error('Error al obtener las tareas:', error);
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
};

// Controlador para crear una nueva tarea

exports.crearTarea = async (req, res) => {
  try {
    const nuevaTarea = req.body; // Datos de la nueva tarea

    // Crear una nueva tarea en la base de datos
    const tarea = await Tarea.create(nuevaTarea);

    res.status(201).json(tarea);
  } catch (error) {
    console.error('Error al crear la tarea:', error);
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
}
