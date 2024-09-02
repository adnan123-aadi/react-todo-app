import React from 'react'

const Todocard = ({ todo, handleDeleteTodos, index }) => {
  return (
    <div>
      <li className="todoItem">
        {todo}
        <div className="actionsContainer">
       
          <button
            onClick={() => {
              handleDeleteTodos(index);
            }}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default Todocard