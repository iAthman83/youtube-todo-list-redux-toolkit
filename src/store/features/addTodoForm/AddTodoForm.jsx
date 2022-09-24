import React from "react";
import "./addtodo.css";

const AddTodoForm = () => {
  return (
    <div className="todo-form">
      <form>
        <input
          type="text"
          name="todoItem"
          id="todoitem"
          className="add-input"
        />
        <button type="button" className="add-button">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
