import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "./selector";
import TodoItem from "./todoItem";
import TodoItemCreator from "./todoItemCreator";
import { TodoListFilter } from "./todoListFilter";
import { TodoListStats } from "./todoListStats";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div>
      <TodoListStats />
      <TodoListFilter />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
