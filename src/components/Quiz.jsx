import { useState } from "react";

import QUESTIONS from "../question.js";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  function handelSelectedAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }

  const ActiveQuestion = userAnswers.length;
  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[ActiveQuestion].text} </h2>
        <ul id="answers">
          {QUESTIONS[ActiveQuestion].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handelSelectedAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
