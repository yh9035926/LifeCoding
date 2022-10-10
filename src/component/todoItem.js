import React from "react";
import { todoListState } from "../atom/atom";
import { useRecoilState } from "recoil";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  };

  const editItemText = (e) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.target.value,
    });
    setTodoList(newList);
  };

  const ToggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = todoList.filter((listItem) => listItem.id !== item.id);
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" onChange={editItemText} value={item.text} />
      <input
        type="checkbox"
        onChange={ToggleItemCompletion}
        checked={item.isComplete}
      ></input>

      <button onClick={deleteItem}>x</button>
    </div>
  );
};

export default TodoItem;
