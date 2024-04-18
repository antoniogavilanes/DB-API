// Importa el modelo de Responsable si lo tienes definido
const Responsable = require('../../models/responsable.model'); // Ajusta la ruta según la ubicación de tu modelo

// Controlador para obtener todos los responsables
async function obtenerTodosLosResponsables(req, res, next) {
    try {
        const responsables = await Responsable.find();
        res.json(responsables);
    } catch (error) {
        next(error);
    }
}

// Controlador para crear un nuevo responsable
async function crearResponsable(req, res, next) {
    try {
        const { nombre, apellido } = req.body;
        const nuevoResponsable = new Responsable({ nombre, apellido });
        const responsableGuardado = await nuevoResponsable.save();
        res.status(201).json(responsableGuardado);
    } catch (error) {
        next(error);
    }
}

// Controlador para obtener un responsable por su ID
async function obtenerResponsablePorId(req, res, next) {
    try {
        const responsableId = req.params.id;
        const responsable = await Responsable.findById(responsableId);
        if (!responsable) {
            return res.status(404).json({ message: 'Responsable no encontrado' });
        }
        res.json(responsable);
    } catch (error) {
        next(error);
    }
}

// Controlador para actualizar un responsable por su ID
async function actualizarResponsable(req, res, next) {
    try {
        const responsableId = req.params.id;
        const { nombre, apellido } = req.body;
        const responsableActualizado = await Responsable.findByIdAndUpdate(
            responsableId,
            { nombre, apellido },
            { new: true }
        );
        if (!responsableActualizado) {
            return res.status(404).json({ message: 'Responsable no encontrado' });
        }
        res.json(responsableActualizado);
    } catch (error) {
        next(error);
    }
}

// Controlador para eliminar un responsable por su ID
async function eliminarResponsable(req, res, next) {
    try {
        const responsableId = req.params.id;
        const responsableEliminado = await Responsable.findByIdAndDelete(responsableId);
        if (!responsableEliminado) {
            return res.status(404).json({ message: 'Responsable no encontrado' });
        }
        res.json({ message: 'Responsable eliminado correctamente' });
    } catch (error) {
        next(error);
    }
}

async function obtenerTareasPorResponsable(req, res, next) {
    try {
        const responsableId = req.params.responsableId;
        // Suponiendo que en tu modelo de Tarea tienes un campo 'responsableId' que almacena el ID del responsable asociado a la tarea
        const tareas = await Tarea.find({ responsableId });
        res.json(tareas);
    } catch (error) {
        next(error);
    }
}

// Exporta los controladores para ser utilizados en las rutas
module.exports = {
    obtenerTodosLosResponsables,
    crearResponsable,
    obtenerResponsablePorId,
    actualizarResponsable,
    eliminarResponsable,
    obtenerTareasPorResponsable
};
