import React from "react";
import Counter from "./Components/Counter";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import JokeGenerator from "./Components/JokeGenerator";

import QuizApp from "./Components/QuizApp";
import Todo from "./Components/Todo";
import Projects from "./Components/Projects";
import ProjectDetailsCard from "./Components/ProjectDetailsCard";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div>
        <div
          className={
            darkMode
              ? "bg-gray-900 text-white min-h-screen"
              : "bg-white text-black min-h-"
          }
        >
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Counter" element={<Counter darkMode={darkMode} />} />
            <Route
              path="/joke-generator"
              element={<JokeGenerator darkMode={darkMode} />}
            />
            <Route path="/quiz-app" element={<QuizApp darkMode={darkMode} />} />
            <Route path="/todo" element={<Todo darkMode={darkMode} />} />
            <Route
              path="/projects"
              element={<Projects darkMode={darkMode} />}
            />
            <Route
              path="/projectsdetails/:id"
              element={<ProjectDetailsCard darkMode={darkMode} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
