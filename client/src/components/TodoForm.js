import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const TodoForm = (props) => {
    const [todo, setTodo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addTodo(todo);
        setTodo('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField label="Todo" value={todo} onChange={(event) => setTodo(event.target.value)} />
            <Button type="submit" variant="contained" color="primary">Add Todo</Button>
        </form>
    )
}

export default TodoForm;
