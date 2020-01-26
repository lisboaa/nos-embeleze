const { Router } = require('express');
const UserController = require('./src/controllers/UsersController');
const routes = Router();

routes.post('/users', UserController.merge);
routes.get('/users', UserController.buscarUsuarios);
module.exports = routes;