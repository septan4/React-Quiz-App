import { useState, useCallback } from "react";
import QuizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../question.js";
import QuestionTimer from "./QuestionTimer.jsx";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const ActiveQuestion = userAnswers.length;

  const quizIsComplete = ActiveQuestion === QUESTIONS.length;

  const handelSelectedAnswer = useCallback(function handelSelectedAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(() => {
    handelSelectedAnswer(null);
  }, [handelSelectedAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={QuizCompletedImg} alt="" srcset="" />
        <h2>Quiz is Completed </h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[ActiveQuestion].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={ActiveQuestion}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[ActiveQuestion].text} </h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
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
