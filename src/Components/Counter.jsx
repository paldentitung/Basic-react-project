import React from "react";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="h-[100vh] flex justify-center items-center flex-col space-y-3 p-2 ">
        <div className="text-3xl font-bold font-mono">Counter App</div>
        <div className="flex flex-col justify-center items-center space-y-2 max-w-[450px] p-3  h-auto md:h-[200px] w-full border-1 rounded-md shadow-lg shadow-[rgb(225,225,225)]">
          <div>
            <span className="text-6xl font-bold ">{count}</span>
          </div>
          <div className="flex gap-4  flex-col md:flex-row md:space-y-0  ">
            <button
              onClick={() => setCount(count + 1)}
              className="border-2 bg-blue-500 w-full md:w-auto text-white px-6 py-2 rounded-md shadow-md transition-all duration-200 hover:cursor-pointer hover:shadow-[rgb(200,200,200)] active:opacity-25"
            >
              Increment
            </button>
            <button
              onClick={() => setCount(0)}
              className="border-2 bg-blue-500 w-full md:w-auto text-white px-6 py-2 rounded-md shadow-md transition-all duration-200 hover:cursor-pointer hover:shadow-[rgb(200,200,200)] active:opacity-25"
            >
              Reset
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className="border-2 bg-blue-500 w-full md:w-auto text-white px-6 py-2 rounded-md shadow-md transition-all duration-200 hover:cursor-pointer hover:shadow-[rgb(200,200,200)] active:opacity-25"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
