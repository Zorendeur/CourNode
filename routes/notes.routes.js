const express = require('express');
const router = express.Router(); // Crée une nouvelle instance de Express Router.
const notesController = require('../controllers/notes.controller'); // Importe le contrôleur des notes.
// Définition des routes pour la ressource 'notes'.
// Le préfixe '/api/notes' sera ajouté dans server.js.
router.get('/', notesController.getAllNotes); // GET /api/notes
router.get('/:id', notesController.getNoteById); // GET /api/notes/:id
router.post('/', notesController.createNote); // POST /api/notes
router.put('/:id', notesController.updateNote); // PUT /api/notes/:id
router.delete('/:id', notesController.deleteNote); // DELETE /api/notes/:id
module.exports = router; // Exporte ce routeur pour qu'il soit utilisé par l'application Express principale.