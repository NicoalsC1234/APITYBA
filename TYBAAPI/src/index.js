// In src/index.js 
require('dotenv').config(); //Obtener los datos basicos para poder ejecutar el proyecto
const express = require("express"); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(bodyParser.json());

// Middleware
app.use(express.json());

// Rutas
app.use('/api/routes', routes);

//Conexión a la base de datos creada en MongoDb a traves de la libreria mongoose
mongoose.connect('mongodb+srv://nicochaleega:EoIS6UpIoqdvBq1c@cluster0.fpywnhz.mongodb.net/TYBATEST?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

//Prueba para poder confirmar el puerto donde se esta desplegando el proyecto 
app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});