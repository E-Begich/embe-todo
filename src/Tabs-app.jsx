import { useState } from "react";
import "./Tabs-app.css";
import Add from "./Todo/AddTodo";
import TodoItem from "./Todo/TodoItem";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [todo, setTodo] = useState ([]);

  const getItem = (item) =>{
    setTodo((prevState)=>{
        return [...prevState, item];
    })
  };

const getCompleted = (id) =>{
    setTodo((prevState) =>{
        return prevState.filter((item, index) =>{
            return index !== id;
        })
    })
}
  
  const toggleTab = (index) => {
    setToggleState(index);
  };



  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          All
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Active
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Completed
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>My Tasks</h2>
    
          <p>
            <Add item={getItem}/>
            {todo &&  todo.map((todo, index)=>(
                <TodoItem id={index} item={todo} completed={getCompleted}/>
            ))};

          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>All</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Completed</h2>
  
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;

