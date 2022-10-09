import React from "react";
import { todoListState } from "../atom/atom";
import { useRecoilState } from "recoil";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const editItemText = (e) => {
    const newList = todoList.map((listItem) =>
      listItem.id === item.id ? { ...listItem, text: e.target.value } : listItem
    );
    setTodoList(newList);
  };

  const ToggleItemCompletion = () => {
    const newList = todoList.map((listItem) =>
      listItem.id === item.id
        ? { ...listItem, isComplete: !item.isComplete }
        : listItem
    );
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
