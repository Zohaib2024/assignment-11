import React from "react";

// Define props interface
interface ChildProps {
  name: string;
  age: string; // Assuming age is passed as a string
  gender: string;
}

const Child: React.FC<ChildProps> = ({ name, age, gender }) => {
  return (
    <div>
      <h1 className="text-2xl">
        My name is <strong>{name}</strong>
      </h1>
      <h1 className="text-2xl">
        I am <strong>{age}</strong> years old
      </h1>
      <h1 className="text-2xl">
        My gender is <strong>{gender}</strong>
      </h1>
    </div>
  );
};

export default Child;
