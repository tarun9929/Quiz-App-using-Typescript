import React, { useState } from 'react'
import QuizBoard from './Components/QuizBoard'

interface Problem {
  _id: string,
  statement: string,
  options: [string , string , string]
}

function App() {
  const [question , setQuestion] = useState<Problem>({
    _id: "10120",
    statement: "Who created World Wide Web (www)",
    options: ["Martin Richards" , "ken thompson" , "Tim Berners-Lee"]
  })
  return (
    <>
      <QuizBoard _id={question?._id} statement={question.statement} options={question.options} />
    </>
  )
}

export default App
