const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// Get all todos
router.get('/', (req, res) => {
    Todo.find((err, todos) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json({ todos });
        }
    });
});

// Get a single todo
router.get('/:id', (req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json({ todo });
        }
    });
});

// Create a new todo
router.post('/', (req, res) => {
    const todo = new Todo(req.body);
    todo.save((err, todo) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(201).json({ todo });
        }
    });
});

// Update a todo
router.put('/:id', (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json({ todo });
        }
    });
});

router.patch('/:id', (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json({ todo });
        }
    });
});

// Delete a todo
router.delete('/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, todo) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json({ todo });
        }
    });
});

module.exports = router;
