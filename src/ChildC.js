import React from "react";

const ChildC = ({ name }) => {
  return (
    <div>
      <button onClick={() => name("Naveed")}>Give Name</button>
    </div>
  );
};

export default ChildC;
