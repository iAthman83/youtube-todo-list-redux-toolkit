import React from "react";
import "./todolist.css";
import SingleTodo from "../singleTodo/SingleTodo";
import AddTodoForm from "../addTodoForm/AddTodoForm";
import DeleteButton from "../../../component/deleteTodos/DeleteButton";
import TitleComponent from "../../../component/title/TitleComponent";

import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div className="todoList">
      <TitleComponent />
      <AddTodoForm />
      <div className="todoList-ul">
        <SingleTodo />
      </div>
      <DeleteButton />
    </div>
  );
};

export default TodoList;
