import React from "react";

const Button = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 bg-blue-500 w-full md:w-auto text-white px-6 py-2 rounded-md shadow-md transition-all duration-200 hover:cursor-pointer hover:shadow-[rgb(200,200,200)] active:opacity-25"
    >
      {name}
    </button>
  );
};

export default Button;
