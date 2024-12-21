import React from "react";
import Child from "./Child";

const Parent: React.FC = () => {
  const name: string = "ZOHAIB";
  const age: string = "22"; // Keeping this as a string to match your code
  const gender: string = "Male";

  return (
    <div className="mt-10">
      <Child name={name} age={age} gender={gender} />
    </div>
  );
};

export default Parent;
