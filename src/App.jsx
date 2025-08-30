import React from "react";
import Counter from "./Components/Counter";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import JokeGenerator from "./Components/JokeGenerator";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Counter" element={<Counter />} />

        <Route path="/joke-generator" element={<JokeGenerator />} />
      </Routes>
    </>
  );
};

export default App;
