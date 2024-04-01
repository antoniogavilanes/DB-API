from flask import Flask, jsonify, request
from pymongo import MongoClient

app = Flask(__name__)

# Configuración de la conexión a MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['APIDB']  
tareas_collection = db['tareas']  # Colección para almacenar las tareas

# Ruta para obtener todas las tareas
@app.route('/tareas', methods=['GET'])
def obtener_tareas():
    tareas = list(tareas_collection.find())

    # Convertir ObjectId a cadenas de texto para serializar a JSON
    for tarea in tareas:
        tarea['_id'] = str(tarea['_id'])

    return jsonify({'tareas': tareas})


# Ruta para crear una nueva tarea
@app.route('/tareas', methods=['POST'])
def crear_tarea():
    nueva_tarea = request.json.get('tarea')
    tareas_collection.insert_one({'tarea': nueva_tarea})  # Insertar la nueva tarea en la colección
    return jsonify({'mensaje': 'Tarea creada correctamente'})

# Ruta para actualizar una tarea existente
@app.route('/tareas/<int:id>', methods=['PUT'])
def actualizar_tarea(id):
    tarea_actualizada = request.json.get('tarea')
    tareas_collection.update_one({'_id': id}, {'$set': {'tarea': tarea_actualizada}})  # Actualizar la tarea en la colección
    return jsonify({'mensaje': 'Tarea actualizada correctamente'})

# Ruta para eliminar una tarea existente
@app.route('/tareas/<int:id>', methods=['DELETE'])
def eliminar_tarea(id):
    tareas_collection.delete_one({'_id': id})  # Eliminar la tarea de la colección
    return jsonify({'mensaje': 'Tarea eliminada correctamente'})

if __name__ == '__main__':
    app.run(debug=True)
