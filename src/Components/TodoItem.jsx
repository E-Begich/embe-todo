import ListGroupItem from 'react-bootstrap/ListGroupItem';
import FormCheck from 'react-bootstrap/FormCheck';
import Button from 'react-bootstrap/Button';

export default function TodoItem({ todo, handleTodoToggle, handleTodoRemove }){ //todo i handleTodo... su komponente iznad a komponente iznad su u todolist.jsx
    // const handleTodoCheck =()=>{
    //     handleTodoToggle(todo.id); //šaljemo po id kako bi znali po čemu hvatamo
    // } ako stavimo ovo onda u formcheck stavljamo onChange={handleTodoCheck}

    // const handleTodoRemove = () => {
    //     handleTodoDelete(todo.id);
    // } ako pozivamo na ovaj način onda u button dodajemo onClick={handleTodoRemove}

    return (
        <ListGroupItem>
            <FormCheck 
                checked={todo.completed} 
                onChange={() => handleTodoToggle(todo.id)}  
                inline />
            
            <span className={todo.completed ? 'text-decoration-line-through': ""}> 
                {todo.text} 
            </span>

           <Button onClick={() => handleTodoRemove(todo.id)}  
                variant="danger" 
                style={{ float: 'right'}}>
                X
            </Button>
        </ListGroupItem>
//ovdje mozemo dodati poruku da potvrdimo ako zelimo izbrisati
    );
}