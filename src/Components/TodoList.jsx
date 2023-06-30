import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from './TodoItem'; 


export default function TodoList({ todos, handleTodoToggle, handleTodoRemove }){ //ovdje se nalaze komponente iznad a one su u App.js
 return (
    <ListGroup>
        {todos.map(todo => {  // ova komponenta smao izlistava komponente koje smo pozvali a nalaze se iznad (komponente iznad su one koje se nalaze u app.js) 
            return (
                <TodoItem 
                key={todo.id}
                todo={todo} 
                handleTodoToggle={handleTodoToggle}
                handleTodoRemove={handleTodoRemove}/>
            )
        })}
    </ListGroup>
 )

}

