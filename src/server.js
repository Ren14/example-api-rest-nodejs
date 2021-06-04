// Defino costantes para iniciar el servidor web
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const helmet = require('helmet');
const cors = require('cors')

// Defino el PATH donde se encuentran las variables de entorno que va usar mi API
dotenv.config({ path: 'src/config/config.env' });

const app = express();

// Defino las librerías que va utilizar mi API en modo desarrollo
if (process.env.NODE_ENV === 'development') {
    app.use(require('morgan')('dev'));
}

// Defino los middlewares que va utilizar mi API
app.use(helmet());
app.use(express.json());
app.use(cors());

// Defino el punto de inicio de las rutas de mi API
app.use('/api/v1/posts', require('./routes/postsRoute'));

// Defino el puerto en que va correr el servidor web
const PORT = process.env.PORT || 5000;

// Muestro un mensaje indicando que nuestro servidor web está corriendo
app.listen(PORT,
    console.log(`Server up and running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold)
);