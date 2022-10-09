import { useRecoilState } from "recoil";
import { charTextBack } from "./selector";

const TextBack = () => {
  const back = useRecoilState(charTextBack);

  return <div>뒤집힌 텍스트:{back}</div>;
};

export default TextBack;
