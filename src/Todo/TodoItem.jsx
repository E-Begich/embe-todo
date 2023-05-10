import React from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TodoItem.css";


export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo } = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"}>
            {todo.text}
            <div className="iconsContainer">
                <Form.Check onClick={() => completeTodo(todo.id)}/>
                <CloseButton variant="primary" onClick={() => removeTodo(todo.id)}/>

            </div>
        </div>
    )
}