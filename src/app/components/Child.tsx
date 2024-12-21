import React from "react";

const Child = (props: any) => {
  return (
    <div>
      <h1 className="text-2xl">
        My name is <strong>{props.name}</strong>
      </h1>
      <h1 className="text-2xl">
        I am <strong>{props.age}</strong> years old
      </h1>
      <h1 className="text-2xl">
        My gender is <strong>{props.gender}</strong>
      </h1>
    </div>
  );
};

export default Child;
