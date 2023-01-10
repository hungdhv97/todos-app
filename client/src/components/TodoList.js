import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


axios.defaults.baseURL = 'http://localhost:5000';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = () => {
        axios.get('/api/todos')
            .then(response => {
                console.log(response);
                setTodos(response.data.todos);
            })
            .catch(error => console.error(error));
    }

    const addTodo = (title) => {
        axios.post('/api/todos', { title: title, completed: false })
            .then(response => {
                setTodos([...todos, response.data.todo]);
            })
            .catch(error => console.error(error));
    }

    const markComplete = (id) => {
        axios.patch(`/api/todos/${id}`, { completed: !todos.find(todo => todo._id === id).completed })
            .then(response => {
                const newTodos = todos.map(todo => {
                    if (todo._id === id) {
                        return response.data.todo;
                    } else {
                        return todo;
                    }
                });
                setTodos(newTodos);
            })
            .catch(error => console.error(error));
    }

    const deleteTodo = (id) => {
        axios.delete(`/api/todos/${id}`)
            .then(response => {
                const newTodos = todos.filter(todo => todo._id !== id);
                setTodos(newTodos);
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo._id}
                        id={todo._id}
                        title={todo.title}
                        completed={todo.completed}
                        handleComplete={() => markComplete(todo._id)}
                        handleDelete={() => deleteTodo(todo._id)}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
