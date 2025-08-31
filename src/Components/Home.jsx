import React from "react";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="flex flex-col space-y-4  p-5">
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold">Hi, I'm Palden</h1>
          <p className=" text-lg">
            Welcome to my React mini-project showcase. Explore my Counter, Todo,
            joke generator, and Quiz apps using the Navbar above.
          </p>
        </div>
        <div className="max-w-3xl mx-auto text-center ">
          <h2 className="text-2xl font-semibold mb-2">About This Site</h2>
          <p>
            This site is a collection of mini React projects I’ve built to
            practice state management, component design, API usage, and user
            interaction. It’s designed to showcase my skills as I learn
            full-stack development.
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <Link to="projects">
            <Button name="view projects" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
