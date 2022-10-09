import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../atom/atom";
import TodoItem from "./todoItem";
import TodoItemCreator from "./todoItemCreator";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <div>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
