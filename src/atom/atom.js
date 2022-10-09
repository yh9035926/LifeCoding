import { atom } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [
    {
      id: 1,
      text: "허허허",
    },
  ],
});

export const textState = atom({
  key: "textState",
  default: "",
});
