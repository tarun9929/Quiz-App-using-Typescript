import React, { useState } from "react";
import QuizBoard from "./Components/QuizBoard";
import { nanoid } from "nanoid";
import type { Problem } from "./Interface/Quiz.Interface";

function App() {
  const [question, setQuestion] = useState<Problem>({
    _id: nanoid(),
    statement: "Who created World Wide Web (www)",
    options: [
      {
        _id: nanoid(),
        option: "Martin Richards",
      },
      {
        _id: nanoid(),
        option: "ken thompson",
      },
      {
        _id: nanoid(),
        option: "Tim Berners-Lee",
      },
    ],
  });
  return (
    <>
      <QuizBoard
        _id={question?._id}
        statement={question.statement}
        options={question.options}
      />
    </>
  );
}

export default App;
