import React, { type JSX } from "react";

interface Problem {
  _id: string;
  statement: string;
  options: string[];
}

function QuizBoard({ _id, statement, options }: Problem): JSX.Element {
  return (
    <>
      <div className="mt-6 flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl text-center">React Quiz App</h1>
        <div className="flex flex-col justify-center items-center gap-5 w-1/2">
          <h1 className="text-xl">{statement}</h1>
          <div className="flex flex-col gap-3 border rounded-md w-full">
            {options.map((element: string): JSX.Element => {
              return (
                <div className="w-full" key={_id}>
                  <input
                    type="radio"
                    name="option"
                    id="option-1"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="option-1"
                    className="peer-checked:bg-blue-700 peer-checked:text-white px-3 py-2 block"
                  >
                    {element}
                  </label>
                </div>
              );
            })}
          </div>
          <button className="bg-blue-600 cursor-pointer active:scale-95 px-4 rounded-md py-1 text-white mt-3">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default QuizBoard;
