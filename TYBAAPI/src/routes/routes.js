const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

//Dafinición de las rutas para poder acceder a cada uno de los endpoints
router.post('/nearby', authMiddleware, restaurantController.getNearbyRestaurants);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;