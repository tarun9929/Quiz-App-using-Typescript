import { nanoid } from "nanoid"

const data = [
  {
    _id: nanoid(),
    statement: "Who created the World Wide Web (WWW)?",
    options: [
      { _id: nanoid(), option: "Martin Richards" },
      { _id: nanoid(), option: "Ken Thompson" },
      { _id: nanoid(), option: "Tim Berners-Lee" }
    ]
  },
  {
    _id: nanoid(),
    statement: "Which language is used for styling web pages?",
    options: [
      { _id: nanoid(), option: "HTML" },
      { _id: nanoid(), option: "CSS" },
      { _id: nanoid(), option: "Python" }
    ]
  },
  {
    _id: nanoid(),
    statement: "Which company developed the Java programming language?",
    options: [
      { _id: nanoid(), option: "Microsoft" },
      { _id: nanoid(), option: "Sun Microsystems" },
      { _id: nanoid(), option: "Apple" }
    ]
  },
  {
    _id: nanoid(),
    statement: "What does HTTP stand for?",
    options: [
      { _id: nanoid(), option: "HyperText Transfer Protocol" },
      { _id: nanoid(), option: "High Transmission Text Protocol" },
      { _id: nanoid(), option: "Hyper Terminal Transfer Program" }
    ]
  },
  {
    _id: nanoid(),
    statement: "Which of the following is a JavaScript framework?",
    options: [
      { _id: nanoid(), option: "React" },
      { _id: nanoid(), option: "Laravel" },
      { _id: nanoid(), option: "Django" }
    ]
  },
  {
    _id: nanoid(),
    statement: "What does SQL stand for?",
    options: [
      { _id: nanoid(), option: "Structured Query Language" },
      { _id: nanoid(), option: "Sequential Query Logic" },
      { _id: nanoid(), option: "Structured Question List" }
    ]
  },
  {
    _id: nanoid(),
    statement: "Which tag is used to display an image in HTML?",
    options: [
      { _id: nanoid(), option: "<img>" },
      { _id: nanoid(), option: "<image>" },
      { _id: nanoid(), option: "<src>" }
    ]
  },
  {
    _id: nanoid(),
    statement: "Which programming language is known as the backbone of web development?",
    options: [
      { _id: nanoid(), option: "C" },
      { _id: nanoid(), option: "Python" },
      { _id: nanoid(), option: "JavaScript" }
    ]
  },
  {
    _id: nanoid(),
    statement: "Who is known as the father of the C programming language?",
    options: [
      { _id: nanoid(), option: "James Gosling" },
      { _id: nanoid(), option: "Dennis Ritchie" },
      { _id: nanoid(), option: "Bjarne Stroustrup" }
    ]
  },
  {
    _id: nanoid(),
    statement: "Which of the following is used to control the layout of web pages?",
    options: [
      { _id: nanoid(), option: "CSS" },
      { _id: nanoid(), option: "HTML" },
      { _id: nanoid(), option: "Python" }
    ]
  }
]

export default data;