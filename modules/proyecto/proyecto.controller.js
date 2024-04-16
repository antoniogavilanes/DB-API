const Proyecto = require('../../models/proyecto.model');

exports.obtenerTodosLosProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find();
    res.json(proyectos);
  } catch (error) {
    console.error('Error al obtener los proyectos:', error);
    res.status(500).json({ error: 'Error al obtener los proyectos' });
  }
};


exports.crearProyecto = async (req, res) => {
  try {
    const { nombre, descripcion, responsables } = req.body;

    if (!nombre || !descripcion || !responsables || !Array.isArray(responsables)) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const proyecto = await Proyecto.create({ nombre, descripcion, responsables });
    res.status(201).json({ mensaje: 'Proyecto creado correctamente', proyecto });
  } catch (error) {
    console.error('Error al crear el proyecto:', error);
    res.status(500).json({ error: 'Error al crear el proyecto' });
  }
};

exports.obtenerProyectoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const proyecto = await Proyecto.findById(id);

    if (!proyecto) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    res.json(proyecto);
  } catch (error) {
    console.error('Error al obtener el proyecto:', error);
    res.status(500).json({ error: 'Error al obtener el proyecto' });
  }
};

exports.actualizarProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const proyectoActualizado = req.body;

    const proyecto = await Proyecto.findByIdAndUpdate(id, proyectoActualizado, { new: true });

    if (!proyecto) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    res.json(proyecto);
  } catch (error) {
    console.error('Error al actualizar el proyecto:', error);
    res.status(500).json({ error: 'Error al actualizar el proyecto' });
  }
};

exports.eliminarProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const proyecto = await Proyecto.findByIdAndDelete(id);

    if (!proyecto) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    res.json({ mensaje: 'Proyecto eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el proyecto:', error);
    res.status(500).json({ error: 'Error al eliminar el proyecto' });
  }
};
