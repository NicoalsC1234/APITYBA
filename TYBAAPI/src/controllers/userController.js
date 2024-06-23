const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Registro de un usuario nuevo con nombre y contraseña
//Estos datos son guardados en la base de datos de MONGO asociada al proyecto 
exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    //Proceso para hacer hash a la contraseña del usuario por 
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error registering user' });
  }
};

//Login de los usuarios para hacer las peticiones de los restaurantes más cercanos 
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    console.log('Connected to MongoDB')
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    //Busca si el resultado es el mismo con alguno de la base de datos 
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    //extrae el token jwt para hacer la autenticación
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//Metodo para hacer logout de la aplicación
exports.logout = (req, res) => {
  req = ""
  res.status(200).json({ message: 'Logout successful' });
};