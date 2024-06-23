// auth.test.js (archivo de pruebas)

const request = require('supertest');
const app = require('../src/index'); // Importa la aplicación Express configurada correctamente
const mongoose = require('mongoose');
const User = require('../src/models/User');

// Conexión a la base de datos antes de las pruebas
beforeAll(async () => {
  const mongoUrl = 'mongodb+srv://nicochaleega:EoIS6UpIoqdvBq1c@cluster0.fpywnhz.mongodb.net/TYBATEST?retryWrites=true&w=majority&appName=Cluster0'; // URI de tu base de datos de prueba
  await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
});

// Cierra la conexión después de todas las pruebas
afterAll(async () => {
  await mongoose.connection.close();
});

//Prueba numero para poder detectar si se esta creando correctamente el usuario
describe('Pruebas de Registro de Usuario', () => {
  it('debería registrar un nuevo usuario correctamente', async () => {
    const res = await request(app)
      .post('/api/routes/register')
      .send({
        username: 'testuser11s',
        password: 'password123',
      });

    expect(res.statusCode).toEqual(201); // Verifica el código de estado
    expect(res.body).toHaveProperty('message', 'User registered successfully'); // Verifica el mensaje de éxito
    expect(res.body).toHaveProperty('token'); // Verifica que se devuelva un token
  });
});