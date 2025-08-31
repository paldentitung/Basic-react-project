import React from "react";
import Button from "./Button";
import { useState, useEffect } from "react";
const JokeGenerator = ({ darkMode }) => {
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  const [punchline, showPunchline] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchJoke();
  }, []);
  async function fetchJoke() {
    setLoading(true);
    try {
      let res = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      let data = await res.json();
      setJoke({ setup: data.setup, punchline: data.punchline });
      showPunchline(false);
      setTimeout(() => {
        showPunchline(true);
      }, 1500);
      console.log(data);
    } catch (error) {
      alert("error is ", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <div className="h-[80vh] flex justify-center items-center flex-col space-y-4 p-4 ">
        <div className=" text-[28px] sm:text-4xl font-black font-mono text-nowrap">
          Joke Generator
        </div>
        <div
          className={`w-full max-w-[400px] min-h-[200px] max-h-[300px] border-1  flex flex-col items-center p-7 overflow-auto shadow-md transition-all duration-150 ${
            darkMode ? "shadow-black" : "shadow-[rgb(200,200,200)] "
          } `}
        >
          <div className="flex flex-col text-center flex-1">
            {loading ? (
              <span>loading...</span>
            ) : (
              <>
                <span>{joke.setup}</span>
                {punchline && <span>{joke.punchline}</span>}
              </>
            )}
          </div>
          <div>
            <Button name="Random" onClick={fetchJoke} />
          </div>
        </div>
      </div>
    </>
  );
};

export default JokeGenerator;
