import { useContext } from "react";
import { Data } from "../App";

const ComponentOne = () => {
  const name = useContext(Data);
  return (
    <div>
      <h1>Component One</h1>
      <h2>{name}</h2>
    </div>
  );
};

export default ComponentOne;
