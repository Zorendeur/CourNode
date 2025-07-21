const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments.controller');

// ✅ Chaque route attend une fonction en 2e argument
router.get('/', commentsController.getAllComments);
router.get('/:id', commentsController.getCommentById);
router.get('/articles/:articleId/comments', commentsController.getCommentsByArticle); // <-- attention à bien exporter cette fonction !
router.post('/', commentsController.createComment);
router.put('/:id', commentsController.updateComment);
router.delete('/:id', commentsController.deleteComment);

module.exports = router;
