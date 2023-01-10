import React from 'react';
import { ListItem, Checkbox, ListItemText, IconButton } from '@material-ui/core';
import DeleteButton from "@material-ui/icons/Delete"

const TodoItem = (props) => {
    return (
        <ListItem>
            <Checkbox checked={props.completed} onChange={props.handleComplete} />
            <ListItemText primary={props.title} style={{ textDecoration: props.completed ? 'line-through' : 'none' }} />
            <IconButton aria-label="delete" onClick={props.handleDelete}>
                <DeleteButton />
            </IconButton>
        </ListItem>
    )
}

export default TodoItem;
