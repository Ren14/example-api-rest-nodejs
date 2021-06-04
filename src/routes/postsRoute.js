const express = require('express');

// Defino un objeto que se encargará de gestionar las rutas de mi API
const router = express.Router();

// Obtengo los métodos definidos en el Controlador de Posts
const { getPosts, getPostById } = require('../controllers/postsController');

// Acceder por GET a todos los posts
router.route('/').get(getPosts);

// Acceder por GET a un post en particular
router.route('/:id').get(getPostById);

// TODO: Crear nuevo post

// TODO: Editar post

// TODO: Eliminar post

module.exports = router;