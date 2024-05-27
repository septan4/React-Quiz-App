import { useState, useCallback } from "react";
import QuizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../question.js";
import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const ActiveQuestion = userAnswers.length;

  const quizIsComplete = ActiveQuestion === QUESTIONS.length;

  const handelSelectAnswer = useCallback(function handelSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(() => {
    handelSelectAnswer(null);
  }, [handelSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={QuizCompletedImg} alt="QuizCompletedImg" />
        <h2>Quiz is Completed </h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={ActiveQuestion}
        index={ActiveQuestion}
        onSelectAnswer={handelSelectAnswer}
        onSkipAnwser={handleSkipAnswer}
      />
    </div>
  );
}
