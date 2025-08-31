import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
const Card = ({ id, name, desc }) => {
  return (
    <>
      <div className="h-[220px] w-full max-w-[300px] flex flex-col shadow-md shadow-[rgb(200,200,200)] p-4 space-y-3 rounded-md transition-all duration-200 hover:scale-110 hover:cursor-pointer ">
        <div className="flex-1">
          <div className="text-3xl font-bold font-mono">{name}</div>
          <div>{desc}</div>
        </div>
        <div>
          <Link to={`/projectsdetails/${id}`}>
            <Button name="view details" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
