import React, { useContext } from "react";
import { userContext } from "../../App1";

const ComponentC = ({ auto }) => {
  const context = useContext(userContext);
  return (
    <div>
      ComponentC - TARGET
      <h1>Auto: {context.auto}</h1>
      <h2>Model: {context.model}</h2>
      <h2>Engine: {context.engine}</h2>
    </div>
  );
};

export default ComponentC;
