const responsable = require('../../models/responsable.model');

exports.crearResponsable = async (req, res) => {
    try {
        const responsableCreado = await responsable.create(req.body);
        res.json(responsableCreado);
    } catch (error) {
        console.error('Error al crear responsable:', error);
        res.status(500).json({ error: 'Error al crear responsable' });
    }
};

exports.obtenerResponsables = async (req, res) => {
    try {
        const responsables = await responsable.find();
        res.json(responsables);
    } catch (error) {
        console.error('Error al obtener responsables:', error);
        res.status(500).json({ error: 'Error al obtener responsables' });
    }
};

exports.obtenerResponsablePorId = async (req, res) => {
    try {
        const { id } = req.params;
        const responsableEncontrado = await responsable.findById(id);
        if (!responsableEncontrado) {
            return res.status(404).json({ error: 'Responsable no encontrado' });
        }
        res.json(responsableEncontrado);
    } catch (error) {
        console.error('Error al obtener responsable:', error);
        res.status(500).json({ error: 'Error al obtener responsable' });
    }
};

exports.actualizarResponsable = async (req, res) => {
    try {
        const { id } = req.params;
        const responsableActualizado = req.body;
        const responsable = await responsable.findByIdAndUpdate(id, responsableActualizado, { new: true });
        if (!responsable) {
            return res.status(404).json({ error: 'Responsable no encontrado' });
        }
        res.json(responsable);
    } catch (error) {
        console.error('Error al actualizar responsable:', error);
        res.status(500).json({ error: 'Error al actualizar responsable' });
    }
};
