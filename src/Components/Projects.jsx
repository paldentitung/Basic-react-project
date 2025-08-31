import React from "react";
import Card from "./Card";
const Projects = (pros) => {
  return (
    <>
      <div className="flex items-center justify-around flex-wrap  place-items-center w-full h-auto mt-10">
        <Card
          id="1"
          name="Counter"
          desc="A simple React app that increases, decreases, and resets a counter value using state management."
        />
        <Card
          id="2"
          name="ToDo"
          desc="A task management app where users can add, mark complete, and delete tasks, helping them organize daily activities."
        />
        <Card
          id="3"
          name="Joke Generator"
          desc="A fun app that fetches random jokes from an API and displays them on button click."
        />
        <Card
          id="4"
          name="Quiz App "
          desc="An interactive app with multiple-choice questions where users can select answers and see their score at the end."
        />
      </div>
    </>
  );
};

export default Projects;
