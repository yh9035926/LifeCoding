import { selector } from "recoil";
import { textState } from "../atom/atom";

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export const charTextBack = selector({
  key: "charTextBack",
  get: ({ get }) => {
    const text = get(textState).split("").reverse("");

    return text;
  },
});
