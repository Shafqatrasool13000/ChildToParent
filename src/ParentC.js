import React, { useState } from "react";
import ChildC from "./ChildC";

const Parent = () => {
  const [name, setName] = useState("");
  const getDataFromChild = (name) => {
    setName(name);
  };
  return (
    <div>
      <ChildC name={getDataFromChild} />
      {name && <h1>Tu charol hai {name}</h1>}
    </div>
  );
};

export default Parent;
