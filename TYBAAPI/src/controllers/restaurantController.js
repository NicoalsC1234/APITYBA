const axios = require('axios');

//metodo para encontrar los restaurantes por la latitud y longitud
exports.getNearbyRestaurants = async (req, res) => {
  const { latitude, longitude } = req.query;

  //API KEY definida en el archivo .env
  const googleApiKey = process.env.GOOGLE_API_KEY;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  //Petición a la api key de google
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
      params: {
        location: `${latitude},${longitude}`,
        radius: 1500, // Radio en metros
        type: 'restaurant',
        key: googleApiKey,
      },
    });

    //esperar resultado y devovler la lista entera on todos los resultados 
    const restaurants = response.data.results;
    res.status(200).json({ restaurants });
  } catch (error) {
    console.error('Error fetching restaurants:', error.message);
    res.status(500).json({ error: 'Error fetching restaurants' });
  }
};