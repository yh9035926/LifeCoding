import { useRecoilState } from "recoil";
import { textState } from "../atom/atom";

export const TextForm = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div>
        Text
        <input type="text" value={text} onChange={onChange} />
        <div>텍스트:{text}</div>
      </div>
    </>
  );
};
