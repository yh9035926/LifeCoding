import React from "react";
import { RecoilRoot } from "recoil";
import TextBack from "./component/textBack";
import TextCounter from "./component/textCounter";
import { TextForm } from "./component/textForm";
import TodoList from "./component/todoList";

const App = () => {
  return (
    <RecoilRoot>
      <div>
        <TextForm />
        <TextCounter />
        <TextBack />
        <TodoList />
      </div>
    </RecoilRoot>
  );
};

export default App;
