import React from "react";
import "./singletodo.css";
import { BsCheckSquare, BsPencilFill, BsTrash } from "react-icons/bs";

const SingleTodo = () => {
  return (
    <div className="todo">
      <div className="todo-left">Wake up</div>
      <div className="todo-right">
        <div className="icons-wrapper">
          <BsCheckSquare color="green" size={24} className="icon" />
          <BsPencilFill color="purple" size={24} className="icon" />
          <BsTrash color="red" size={24} className="icon" />
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;
