import React from 'react'
import Todocard from './Todocard'

const Todolist = ({ todos, handleDeleteTodos }) => {
  return (
    <ul className="main" style={{ marginTop: "20px" }}>
      {todos.map((todo, todoIndex) => {
        return (
          <Todocard
            handleDeleteTodos={handleDeleteTodos}
            key={todoIndex}
            todo={todo}
            index={todoIndex}
          >
            {todo}
          </Todocard>
        );
      })}
    </ul>
  );
};

export default Todolist