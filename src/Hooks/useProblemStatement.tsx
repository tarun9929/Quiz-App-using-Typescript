import type { Problem } from "@/Interface/Quiz.Interface";
import React, { useEffect, useState } from "react";
import data from "@/Temp/temp.data";

type ReturnType = {
  problem: number;
  setProblmeIndex: React.SetStateAction<number>;
};

export default function useProblemStatement(index: number) {
  const [problem, setProblme] = useState<Problem | null>(null);
  const [problemIndex, setProblmeIndex] = useState<number>(index);

  useEffect(() => {
    if (problemIndex < data.length) {
      const response = data[problemIndex];
      console.log(response);

      if (response) {
        setProblme(response);
      }
    }
  }, [problemIndex]);

  return {
    problem,
    setProblmeIndex,
  };
}
