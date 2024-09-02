import { useState } from "react";
import TodoInput from "./components/TodoInput"
import Todolist from "./components/Todolist"

import './index.css'

function App() {
   


  const [todos, setTodos] = useState([
    
    ]);

    const handleAddTodos=(addTodo)=>{
      const newTodoList=[...todos,addTodo];
      setTodos(newTodoList)
    }

    const handleDeleteTodos=(index)=>{
      const newTodoList=todos.filter((todo, todoIndex)=>{
        return todoIndex!==index;
      })
      setTodos(newTodoList)
    }
  return (
    <main>
      <TodoInput handleAdd={handleAddTodos} />
      <Todolist handleDeleteTodos={handleDeleteTodos} todos={todos} />
    </main>
  );
}

export default App
