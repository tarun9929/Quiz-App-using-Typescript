import React, { type JSX } from "react";
import type { Options } from "@/Interface/Quiz.Interface";
import type { Problem } from "@/Interface/Quiz.Interface";

function QuizBoard({ _id, statement, options }: Problem): JSX.Element {
  return (
    <>
      <div
        className="mt-6 flex flex-col gap-6 items-center justify-center w-1/2"
        key={_id}
      >
        <h1 className="text-3xl text-center">React Quiz App</h1>
        <div className="flex flex-col justify-center items-center gap-5 w-1/2">
          <h1 className="text-xl">{statement}</h1>
          <div className="flex flex-col gap-3 border rounded-md w-full">
            {options.map((element: Options): JSX.Element => {
              return (
                <div className="w-full" key={element._id}>
                  <input
                    type="radio"
                    name="option"
                    id={element._id}
                    className="hidden peer"
                  />
                  <label
                    htmlFor={element._id}
                    className="peer-checked:bg-blue-700 peer-checked:text-white px-3 py-2 block "
                  >
                    {element.option}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizBoard;
