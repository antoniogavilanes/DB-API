const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());


const { connectToDatabase } = require('./modules/mongodb/mongodb.module');
connectToDatabase();


const tareasRouter = require('./routes/tareas');
app.use('/tareas', tareasRouter);


app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views', 'pages'));


app.get('/', (req, res) => {
  res.render('index');
});



app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  next(error);
});


app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});

