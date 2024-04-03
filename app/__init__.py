from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)

# Configuración de la conexión a MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['nombre_de_tu_base_de_datos']

from app import routes
