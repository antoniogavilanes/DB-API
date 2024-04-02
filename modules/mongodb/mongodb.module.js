const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const mongodbConfigPath = path.join(__dirname, '..', '..', 'config', 'mongodb', 'mongodb-config.json');
const mongodbConfig = JSON.parse(fs.readFileSync(mongodbConfigPath, 'utf-8'));

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`mongodb://${mongodbConfig.mongodb.server}/${mongodbConfig.mongodb.database}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conexión a MongoDB exitosa');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
};

module.exports = { connectToDatabase };
