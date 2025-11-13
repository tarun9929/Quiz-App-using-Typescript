import React, { useState } from "react";
import QuizBoard from "./Components/QuizBoard";
import { nanoid } from "nanoid";
import type { Problem } from "./Interface/Quiz.Interface";
import useProblemStatement from "./Hooks/useProblemStatement";

function App() {
  const { problem, setProblmeIndex } = useProblemStatement(1);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <QuizBoard
          _id={problem ? problem._id : ""}
          statement={problem ? problem.statement : ""}
          options={problem ? problem.options : []}
        />
        <button
          className="bg-blue-600 cursor-pointer active:scale-95 px-4 rounded-md py-1 text-white mt-3"
          onClick={() => setProblmeIndex((prev) => prev + 1)}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
