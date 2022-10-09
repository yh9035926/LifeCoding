import React from "react";
import { charCountState } from "./selector";
import { useRecoilValue } from "recoil";

const TextCounter = () => {
  const count = useRecoilValue(charCountState);

  return (
 
      <div>글자 길이:{count}</div>
   
  );
};

export default TextCounter;
