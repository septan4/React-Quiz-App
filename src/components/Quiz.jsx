import { useState, useCallback } from "react";
import QUESTIONS from "../question.js";
import Question from "./Question.jsx";
import Sumnary from "./Summary.jsx";

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
    return <Sumnary userAnswers={userAnswers} />;
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
