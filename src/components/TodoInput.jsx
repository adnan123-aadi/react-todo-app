import React, { useState } from 'react'

const TodoInput = ({ handleAdd }) => {
    const [todoValue,setTodoValue]=useState("")
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleAdd(todoValue);
        setTodoValue("");
      }
    };
  return (
    <header>
      <input
        value={todoValue}
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter Todo"
        type="text"
      />
      <button
        onClick={() => {
          handleAdd(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput