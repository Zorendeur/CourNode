const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todos.controller');

router.get('/todos', todosController.getTodos);
router.post('/todos', todosController.createTodo);
router.delete('/todos/:id', todosController.deleteTodo);
router.patch('/todos/:id', todosController.updateTodo);

module.exports = router;
