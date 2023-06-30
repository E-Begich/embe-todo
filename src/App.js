import { useState } from "react";
import { uid } from "uid";
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from './Components/Toolbar';
import AddTodo from './Components/AddTodo';
import './App.css';
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  const getVisibleTodos = () => {
    if (activeTab === "all") {
      return todos;
    } else if (activeTab === "active") {
      return todos.filter(todo => !todo.completed);
    } else {
      return todos.filter(todo => todo.completed);
    }
  }

  const visibleTodos = getVisibleTodos();

  const handleAddTodo = (value) => {
    setTodos([...todos, {
      id: uid(),
      text: value,
      completed: false
    }])
  };

  const handleTodoToggle = (todoId) => {
    const currentTodos = [...todos];

    const toggledTodo = currentTodos.find(todo => todo.id === todoId);
    toggledTodo.completed = !toggledTodo.completed;

    setTodos(currentTodos);
  };

  const handleTodoRemove = (todoId) => {
    const currentTodos = [...todos];

    const newTodos = currentTodos.filter[todo => todo.id !== todoId];

    setTodos(newTodos);
  }

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  }

  return (
    <div className="App">
      <header className='header'>
      <h1>Moji zadaci</h1>


        <Toolbar
          activeTab={activeTab}
          handleTabChange={handleTabChange}
        />


        <AddTodo handleAddTodo={handleAddTodo} />


        <TodoList
          todos={visibleTodos}
          handleTodoToggle={handleTodoToggle}
          handleTodoRemove={handleTodoRemove}
        />
      </header>
    </div>
  );
}

export default App;
