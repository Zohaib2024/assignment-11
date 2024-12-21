import React from "react";
import Child from "./Child";

const Parent = () => {
  const name = "ZOHAIB";
  const age = "22";
  const gender = "Male";
  return (
    <div className="mt-10">
      <Child name={name} age={age} gender={gender} />
    </div>
  );
};

export default Parent;
