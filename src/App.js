import React from "react";
import { RecoilRoot } from "recoil";
import TodoList from "./component/todoList";
const App = () => {
  return (
    <RecoilRoot>
      <div>
        <TodoList />
      </div>
    </RecoilRoot>
  );
};

export default App;
