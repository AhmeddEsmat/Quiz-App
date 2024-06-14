import React, { useCallback, useRef, useState } from "react";
import { Questions } from "../Questions";
import Results from "./Results";
import Question from "./Question";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState(null);
  const [timerPaused, setTimerPaused] = useState(false);
  let endQuiz = useRef(false);
  const activeQuestion =
    answerState === null ? userAnswers.length : userAnswers.length - 1;
  const quizCssContainer = "flex flex-col justify-center items-center mt-20";
  const quizCss =
    "bg-[#3D206C] h-[22rem] w-2/5 text-center text-gray-300 rounded-2xl p-4";

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(option) {
      if (option === "unanswered" && answerState === "answered") return;
      setTimerPaused(true);
      setAnswerState("answered");
      setUserAnswers([...userAnswers, option]);

      if (option === "unanswered") {
        console.log("Skipped Answer");
        setAnswerState(null);
        setTimerPaused(false);
        if (userAnswers.length === Questions.length - 1) {
          endQuiz.current = true;
          console.log(endQuiz);
        }
      } else {
        setTimeout(() => {
          if (option === Questions[activeQuestion].correct) {
            setAnswerState("correct");
            console.log("Correct Answer");
          } else {
            setAnswerState("wrong");
            console.log("Incorrect Answer");
          }
          setTimeout(() => {
            setAnswerState(null);
            setTimerPaused(false);
            if (userAnswers.length === Questions.length - 1) {
              endQuiz.current = true;
              console.log(endQuiz);
            }
          }, 1000);
        }, 500);
      }
    },
    [userAnswers, activeQuestion, answerState]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer("unanswered"),
    [handleSelectAnswer]
  );

  if (endQuiz.current === true) {
    return (
      <Results
        userAnswers={userAnswers}
        quizCssContainer={quizCssContainer}
        quizCss={quizCss}
      />
    );
  }

  return (
    <div className={quizCssContainer}>
      <div className={quizCss}>
        <Question
          key={activeQuestion}
          index={activeQuestion}
          userAnswers={userAnswers}
          onSelectAnswer={handleSelectAnswer}
          answerState={answerState}
          onTimeOut={handleSkipAnswer}
          paused={timerPaused}
        />
      </div>
    </div>
  );
}

export default Quiz;
