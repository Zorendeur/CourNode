// routes/users.routes.js
const express = require('express');
const router = express.Router(); // Crée un nouvel objet router
const usersController = require('../controllers/users.controller'); // Importe le contrôleur des utilisateurs
// Associe les méthodes HTTP et les chemins aux fonctions du contrôleur
router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUserById);
router.post('/users', usersController.createUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

module.exports = router; // Exporte le routeur pour qu'il soit utilisé dans server.js