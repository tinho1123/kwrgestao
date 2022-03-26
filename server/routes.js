const express = require('express');

const routes = express.Router();

const KwrUsersControllers = require('./controllers/KwrUsersControllers');


// Rota KwrUsers

routes
    .get('/getuser', KwrUsersControllers.get)
    .post('/createuser', KwrUsersControllers.create)

module.exports = routes;