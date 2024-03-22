import "./App.css";
import Accordion from "./components/Accordion";

function App() {
  const accordionData = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      question: "How does React work?",
      answer: "React uses a virtual DOM to efficiently update the actual DOM.",
    },
    {
      id: 3,
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript used with React to describe what the UI should look like.",
    },
    {
      id: 4,
      question: "Learning React",
      answer:
        "Yeah learning React feels good",
    },
  ];

  return (
    <>
      <Accordion accordionData={accordionData}></Accordion>
    </>
  );
}

export default App;
