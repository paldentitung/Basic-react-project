import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="flex justify-around space-y-3 p-6 items-center border-[1px] border-b-gray-500 sticky z-10 top-0 flex-col md:flex-row">
      <div className="flex space-x-5 items-center">
        <div className="text-2xl font-bold">Projects</div>
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
