import React from "react";
import Child from "./Child";

const Parent = () => {
  let name = "ZOHAIB";
  let age = "22";
  let gender = "Male";
  return (
    <div className="mt-10">
      <Child name={name} age={age} gender={gender} />
    </div>
  );
};

export default Parent;
