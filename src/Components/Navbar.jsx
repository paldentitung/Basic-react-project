import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = ({ darkMode, setDarkMode }) => {
  const [menu, setMenu] = useState(false);
  return (
    <header
      className={`flex justify-around space-y-3 p-6 items-center border-[1px]  sticky z-10 top-0 flex-col md:flex-row ${
        darkMode
          ? "bg-gray-900 text-white border-gray-700 border-b-[1px]"
          : "bg-white text-black border-b-gray-500"
      }`}
    >
      <div className="flex space-x-5 items-center">
        <div className="text-2xl font-bold">
          <Link to="/">Projects</Link>
        </div>
        <div className="block md:hidden">
          <button onClick={() => setMenu(!menu)}>
            {!menu ? (
              <>
                <span className="text-[16px]">&#9776;</span>
              </>
            ) : (
              <>
                <span className="text-2xl">&times;</span>
              </>
            )}
          </button>
        </div>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Counter">Counter</Link>
          </li>
          <li>
            <Link to="/todo">To Do</Link>
          </li>
          <li>
            <Link to="/joke-generator">Joke Generator</Link>
          </li>
          <li>
            <Link to="/quiz-app">Quiz App</Link>
          </li>
        </ul>
      </nav>

      {/* toggle mode */}
      <div
        onClick={() => setDarkMode(!darkMode)}
        className=" flex items-center p-1 w-16 h-8 border rounded-full hover:cursor-pointer"
      >
        <span
          className={`bg-blue-500 w-6 h-6 rounded-full transition-all duration-200 ${
            darkMode ? "translate-x-0 bg-white" : "translate-x-7"
          } `}
        ></span>
      </div>

      {menu && (
        <nav className="block md:hidden">
          <ul className="flex space-y-3 flex-col items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Counter">Counter</Link>
            </li>
            <li>
              <Link to="/todo">To Do</Link>
            </li>
            <li>
              <Link to="/joke-generator">Joke Generator</Link>
            </li>
            <li>
              <Link to="/quiz-app">Quiz App</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
