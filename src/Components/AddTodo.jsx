import { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



export default function AddTodo ( {handleAddTodo} ){
    const [newTodo, setNewTodo] = useState("");

    const handleTodoInput = (event) => {
        setNewTodo(event.target.value);
    }

    const handleTodoButton = () => {
        handleAddTodo(newTodo);
    }

    return (

            <InputGroup>
                <FormControl
                value={newTodo}
                onChange={handleTodoInput}
                    placeholder="Add new todo"
        />

            <Button onClick={handleTodoButton}>
                Add
            </Button>
            </InputGroup>

    );
}