// Importa el modelo de responsable
const Responsable = require('../../models/responsable.model');

// Controladores para manejar las operaciones CRUD de los responsables
exports.actualizarResponsable = async (req, res) => {
    try {
        // Obtiene el ID del responsable a actualizar desde los parámetros de la solicitud
        const { id } = req.params;
        // Obtiene los datos actualizados del responsable desde el cuerpo de la solicitud
        const responsableActualizado = req.body;

        // Busca y actualiza el responsable en la base de datos
        const responsable = await Responsable.findByIdAndUpdate(id, responsableActualizado, { new: true });

        // Si no se encuentra el responsable, devuelve un error
        if (!responsable) {
            return res.status(404).json({ error: 'Responsable no encontrado' });
        }

        // Devuelve el responsable actualizado en la respuesta
        res.json(responsable);
    } catch (error) {
        // Maneja los errores durante el proceso
        console.error('Error al actualizar el responsable:', error);
        res.status(500).json({ error: 'Error al actualizar el responsable' });
    }
};

exports.eliminarResponsable = async (req, res) => {
    try {
        // Obtiene el ID del responsable a eliminar desde los parámetros de la solicitud
        const { id } = req.params;

        // Busca y elimina el responsable de la base de datos
        const responsable = await Responsable.findByIdAndDelete(id);

        // Si no se encuentra el responsable, devuelve un error
        if (!responsable) {
            return res.status(404).json({ error: 'Responsable no encontrado' });
        }

        // Devuelve un mensaje de confirmación en la respuesta
        res.json({ mensaje: 'Responsable eliminado correctamente' });
    } catch (error) {
        // Maneja los errores durante el proceso
        console.error('Error al eliminar el responsable:', error);
        res.status(500).json({ error: 'Error al eliminar el responsable' });
    }
};

exports.obtenerResponsablePorId = async (req, res) => {
    try {
        // Obtiene el ID del responsable desde los parámetros de la solicitud
        const { id } = req.params;

        // Busca el responsable por su ID en la base de datos
        const responsable = await Responsable.findById(id);

        // Si no se encuentra el responsable, devuelve un error
        if (!responsable) {
            return res.status(404).json({ error: 'Responsable no encontrado' });
        }

        // Devuelve el responsable en la respuesta
        res.json(responsable);
    } catch (error) {
        // Maneja los errores durante el proceso
        console.error('Error al obtener el responsable:', error);
        res.status(500).json({ error: 'Error al obtener el responsable' });
    }
};

exports.obtenerResponsables = async (req, res) => {
    try {
        // Busca y obtiene todos los responsables de la base de datos
        const responsables = await Responsable.find();

        // Devuelve los responsables en la respuesta
        res.json(responsables);
    } catch (error) {
        // Maneja los errores durante el proceso
        console.error('Error al obtener los responsables:', error);
        res.status(500).json({ error: 'Error al obtener los responsables' });
    }
};

exports.crearResponsable = async (req, res) => {
    try {
        // Obtiene los datos del nuevo responsable desde el cuerpo de la solicitud
        const responsable = req.body;

        // Crea una nueva instancia del modelo Responsable con los datos proporcionados
        const nuevoResponsable = new Responsable(responsable);

        // Guarda el nuevo responsable en la base de datos
        await nuevoResponsable.save();

        // Devuelve el responsable creado en la respuesta
        res.json(nuevoResponsable);
    } catch (error) {
        // Maneja los errores durante el proceso
        console.error('Error al crear el responsable:', error);
        res.status(500).json({ error: 'Error al crear el responsable' });
    }
};
