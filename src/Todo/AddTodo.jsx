import React, {useState} from 'react';
import './AddTodo.css';
import Button from 'react-bootstrap/Button';


const Add =(props) => {
    const [item, setItem] = useState("");

    const handleChange = (e) => {
        setItem(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.item(item);
    }
    return(
       <div className='container-add'>
        <form className="form_todo" method="post" onSubmit={handleSubmit}>
        <input type="text" className="item" value={item} onChange={handleChange}  placeholder="Enter Your Todo" />
        <Button as="input" type="button" value="Input"  />
        </form>

    
        </div> 
    );
    }

    export default Add;