import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atom/atom";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => {
      const id = oldTodoList.length
        ? oldTodoList[oldTodoList.length - 1].id + 1
        : 0;
      return [...oldTodoList, { id, text: inputValue, isComplete: false }];
    });
    setInputValue("");
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
