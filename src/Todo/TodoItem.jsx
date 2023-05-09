import React from "react";
import './TodoItem.css';
import Form from 'react-bootstrap/Form';

const TodoItem = (props) => {

    return (
        <div className="todo-item">
            <Form.Check aria-label="option 1" onChange={()=>props.completed(props.id)}/>
            <p className="print-item">{props.item}</p>
        </div>
    )
}
export default TodoItem;