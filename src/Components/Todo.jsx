import React from "react";
import Button from "./Button";
import { useState } from "react";
const Todo = ({ darkMode }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showToast, setShowToast] = useState(false);
  const addTask = () => {
    if (newTask.trim() === "") {
      alert("enter ther task");
      return;
    }
    const taskObj = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, taskObj]);
    setNewTask("");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleCompletedTask = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      })
    );
  };
  return (
    <>
      <div className="h-[80vh] flex items-center flex-col mt-10 p-2">
        <div className="text-4xl font-mono font-semibold">To do</div>
        <div
          className={`w-full max-w-[500px] h-[500px]  shadow-md  flex  items-center flex-col p-5  space-y-5 rounded-md ${
            darkMode ? "border-[1px]" : "shadow-[rgb(200,200,200)]"
          } `}
        >
          <div className=" flex gap-2 w-full">
            <input
              type="text"
              className="border-[1px] flex-1 p-2"
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="enter the task here.."
              value={newTask}
            />
            <Button name="Add" onClick={addTask} />
          </div>
          <div className=" w-full">
            <ul className="w-full flex flex-col space-y-4">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="shadow-md p-3 rounded-sm flex items-center justify-between bg-white"
                >
                  <span
                    className={`mr-auto ${
                      task.completed
                        ? "line-through text-gray-400"
                        : "text-gray-800"
                    }`}
                  >
                    {task.text}
                  </span>

                  <button
                    onClick={() => toggleCompletedTask(task.id)}
                    className="ml-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
                  >
                    {task.completed ? "Undo" : "Complete"}
                  </button>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="ml-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showToast && (
        <div className=" absolute bottom-6 right-9  bg-blue-400 text-white w-full max-w-[180px] p-3 rounded-md">
          Task Added
        </div>
      )}
    </>
  );
};

export default Todo;
