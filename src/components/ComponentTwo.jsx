import { useContext } from "react";
import { Data } from "../App";

const CompomentTwo = () => {
  const name = useContext(Data);

  return (
    <div>
      <h1>Component Two</h1>
      <h2>{name}</h2>
    </div>
  );
};

export default CompomentTwo;
