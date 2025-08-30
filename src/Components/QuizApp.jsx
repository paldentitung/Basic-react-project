import React from "react";
import Button from "./Button";
import { useState } from "react";
const QuizApp = () => {
  const [score, showScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Who developed React?",
      options: ["Google", "Facebook", "Microsoft", "Twitter"],
      answer: "Facebook",
    },
    {
      question: "What year was JavaScript created?",
      options: ["1991", "1995", "2000", "2005"],
      answer: "1995",
    },
    {
      question: "Which language is primarily used for Android development?",
      options: ["Java", "Swift", "C#", "Python"],
      answer: "Java",
    },
    {
      question: "Which HTML tag is used to define a table?",
      options: ["<table>", "<tr>", "<td>", "<div>"],
      answer: "<table>",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style System",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which company developed the Python programming language?",
      options: ["Microsoft", "Google", "Python Software Foundation", "Apple"],
      answer: "Python Software Foundation",
    },
    {
      question: "What is the result of 2 + 2 * 2 in JavaScript?",
      options: ["6", "8", "4", "10"],
      answer: "6",
    },
    {
      question: "Which of the following is NOT a JavaScript framework?",
      options: ["Angular", "React", "Django", "Vue"],
      answer: "Django",
    },
    {
      question: "What is the purpose of the `useState` hook in React?",
      options: [
        "To manage component state",
        "To handle routing",
        "To fetch data",
        "To style components",
      ],
      answer: "To manage component state",
    },
  ];

  const handleChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };
  const calcScore = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        newScore += 1;
      }
    });
    showScore(newScore);
  };
  console.log(answers);

  return (
    <>
      <div className="h-[80vh] flex items-center flex-col space-y-4 mt-10 p-3">
        <div className="text-3xl font-bold font-mono">Quiz App</div>
        <div className="flex flex-col items-center gap-3 w-full">
          {finished ? (
            <div className="flex flex-col p-2 gap-3 bg-green-100 w-full max-w-[300px] text-center ">
              <span className="text-[18px]">
                You score is {`${score} out of ${questions.length} `}
              </span>
              <Button
                name="try again"
                onClick={() => {
                  setAnswers({});
                  showScore(0);
                  setFinished(false);
                }}
              />
            </div>
          ) : (
            <>
              {questions.map((question, index) => (
                <div
                  className="flex flex-col  p-4 w-full max-w-[700px] shadow-md shadow-[rgb(200,200,200)]"
                  key={index}
                >
                  <span className="text-lg ">{question.question}</span>
                  <div className="flex gap-3 flex-wrap">
                    {question.options.map((opt) => (
                      <label key={opt} className="flex items-center gap-1 ">
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={opt}
                          checked={answers[index] === opt}
                          onChange={() => handleChange(index, opt)}
                          required
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <div>
                <Button
                  name="submit"
                  onClick={() => {
                    calcScore();
                    setFinished(true);
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default QuizApp;
