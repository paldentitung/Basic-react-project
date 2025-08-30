import React from "react";
import { useState } from "react";
import Button from "./Button";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="h-[80vh] flex justify-center items-center flex-col space-y-3 p-2 ">
        <div className="text-3xl font-bold font-mono">Counter App</div>
        <div className="flex flex-col justify-center items-center space-y-2 max-w-[450px] p-3  h-auto md:h-[200px] w-full border-1 rounded-md shadow-lg shadow-[rgb(225,225,225)]">
          <div>
            <span className="text-6xl font-bold ">{count}</span>
          </div>
          <div className="flex gap-4  flex-col md:flex-row md:space-y-0  ">
            <Button name="Increment" onClick={() => setCount(count + 1)} />
            <Button name="Reset" onClick={() => setCount(0)} />
            <Button name="Decrement" onClick={() => setCount(count - 1)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
