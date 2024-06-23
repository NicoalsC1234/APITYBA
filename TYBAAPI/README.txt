Configuración

Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:

dotenv
Copy code
PORT=3000
MONGO_URI=mongodb://localhost:27017/tu_base_de_datos
JWT_SECRET=your_jwt_secret
FOURSQUARE_CLIENT_ID=fsq30CV8Kp4b0wTXapVRj3tOWRpSrpDB0+DmZNRsowtFUNQ=

API

endpoint para registrar el usuario
POST /api/routes/register

endpoint para hacer login con el usuario
POST /api/routes/login

endpoint para hacer logout con el usuario tener en cuenta el uso del token jwt generado al hacer login
POST /api/routes/logout

endpoint para hacer pedir los restaurantes mas cercanos
POST /api/routes/nearby

Bases de Datos

Utilizamos MongoDB como base de datos principal para este proyecto. Asegúrate de tener MongoDB instalado localmente o configurar una instancia en la nube.

Autenticación

Este proyecto utiliza JWT (JSON Web Tokens) para autenticación. El token JWT se genera al iniciar sesión y se utiliza para autorizar las solicitudes a endpoints protegidos.

Testing
Explica cómo se pueden ejecutar las pruebas automatizadas y proporciona ejemplos si es necesario.

Para ejecutar las pruebas automatizadas, utiliza el siguiente comando:

npm test

Bibliografia:
https://github.com/mongodb-developer/mongodb-express-rest-api-example
https://axios-http.com/docs/intro
https://console.cloud.google.com/freetrial/signup/billing/CO?redirectPath=%2Fgoogle%2Fmaps-apis%2Fonboard;flow%3Djust-ask-flow;step%3Djust_ask
https://deskevinmendez.medium.com/login-y-register-con-nodejs-express-jwt-y-mongodb-ff329ed25a3f
https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/
