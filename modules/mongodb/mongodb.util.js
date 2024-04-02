
const handleMongoError = (error) => {
    console.error('Error de MongoDB:', error);
    
  };
  
  const closeDatabaseConnection = async () => {
    try {
      await mongoose.connection.close();
      console.log('Conexión a la base de datos cerrada correctamente');
    } catch (error) {
      handleMongoError(error);
    }
  };
  
  // Exportamos las funciones que deseamos hacer disponibles desde fuera del archivo
  module.exports = { handleMongoError, closeDatabaseConnection };
  