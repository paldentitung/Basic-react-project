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
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 flex items-center gap-2 font-semibold rounded-md border
             bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
      >
        {darkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
      </button>

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
