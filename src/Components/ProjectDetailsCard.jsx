import React from "react";
import Button from "./Button";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ProjectDetailsCard = () => {
  const projects = [
    {
      id: "1",
      name: "Counter",
      desc: "A simple app with increment/decrement/reset buttons.",
      features: ["Increment button", "Decrement button", "Reset button"],
      techused: ["React", "Tailwind"],
      image: "/images/counter.png",
      codeLink: "https://github.com/paldentitung/Basic-react-project",
      liveDemoLink: "https://react-project-basic-12.netlify.app/Counter",
    },
    {
      id: "2",
      name: "ToDo",
      desc: "A task management app to add, mark complete, and delete tasks.",
      features: ["Add task", "Mark complete", "Delete task"],
      techused: ["React", "Tailwind"],
      image: "/images/todo.png",
      codeLink: "https://github.com/paldentitung/Basic-react-project",
      liveDemoLink: "https://react-project-basic-12.netlify.app/todo",
    },
    {
      id: "3",
      name: "Joke Generator",
      desc: "Fetch random jokes from an API and display them.",
      features: ["Fetch jokes with async/await", "Random joke refresh"],
      techused: ["React", "Fetch API", "Tailwind"],
      image: "/images/joke.png",
      codeLink: "https://github.com/paldentitung/Basic-react-project",
      liveDemoLink: "https://react-project-basic-12.netlify.app/joke-generator",
    },
    {
      id: "4",
      name: "Quiz App",
      desc: "Interactive multiple-choice quiz app with score tracking.",
      features: ["MCQ questions", "Score at the end", "Restart quiz"],
      techused: ["React", "Tailwind"],
      image: "/images/quiz.png",
      codeLink: "https://github.com/paldentitung/Basic-react-project",
      liveDemoLink: "https://react-project-basic-12.netlify.app/quiz-app",
    },
  ];

  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return <p className="text-center mt-10">Project not found!</p>;
  }

  return (
    <>
      <div className="text-[18px] font-mono p-3">
        <Link to="/projects">
          <button className=" border-b-2 transition-all duration-150 hover:opacity-70 cursor-pointer">
            Go back
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center h-[70vh] w-full p-3">
        <div className="flex h-[400px]  flex-col p-3 space-y-4 justify-center items-center shadow-lg shadow-[rgb(200,200,200)] w-full max-w-[400px]  rounded-lg  transition-all duration-200 hover:scale-105 hover:cursor-pointer ">
          <div className="text-center">
            <div className="text-2xl font-mono font-bold">{project.name}</div>
            <div>{project.desc}</div>
          </div>
          <div>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index} className="list-disc ml-6">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-4">
            {project.techused.map((tech, index) => (
              <span key={index} className="py-2 px-4 bg-yellow-100 rounded">
                {tech}
              </span>
            ))}
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div className="flex space-x-3">
            <button
              className=" px-6 py-2 shadow-md shadow-[rgb(200,200,200)] rounded-md bg-green-500 text-white transition-all duration-150 hover:scale-105 "
              onClick={() => window.open(project.codeLink, "_blank")}
            >
              Code
            </button>
            <Button
              name="live Demo"
              onClick={() => window.open(project.liveDemoLink, "_blank")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsCard;
