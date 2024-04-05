const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

// Crear una instancia de la aplicación Express
const app = express();

// Middleware para parsear solicitudes JSON
app.use(bodyParser.json());

// Conexión a la base de datos MongoDB
const { connectToDatabase } = require('./modules/mongodb/mongodb.module');
connectToDatabase();

const responsablesRoutes = require('./routes/responsables');
app.use('/responsables', responsablesRoutes);

// Definir las rutas de la API
const tareasRouter = require('./routes/tareas');
app.use('/tareas', tareasRouter);

// Configuración de la carpeta de archivos estáticos (si es necesario)
app.use(express.static(path.join(__dirname, 'public')));

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
// Configurar el directorio de vistas
app.set('views', path.join(__dirname, 'views', 'pages'));

// Ruta para renderizar el archivo index.ejs
app.get('/', (req, res) => {
  res.render('index');
});

// Manejador de errores para rutas no encontradas
app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  next(error);
});

// Middleware para manejar errores
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});
