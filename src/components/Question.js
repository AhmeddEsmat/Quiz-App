// import React, { useState } from "react";
import Answers from "./Answers";
import ProgressBar from "./ProgressBar";
import { Questions } from "../Questions";

const TIMER = 4000;

function Question({
  index,
  userAnswers,
  onSelectAnswer,
  answerState,
  onTimeOut,
  paused,
}) {
  //   const [answer, setAnswer] = useState({
  //     selectedAnswer: null,
  //     isCorrect: null,
  //   });

  //   function handleSelectAnswer(option) {
  //     setAnswer({ selectedAnswer: option, isCorrect: null });

  //     setTimeout(() => {
  //       if (option === Questions[index].correct) {
  //         setAnswer({ selectedAnswer: option, isCorrect: true });
  //       } else {
  //         setAnswer({ selectedAnswer: option, isCorrect: false });
  //       }
  //       setTimeout(() => {
  //         onSelectAnswer(option);
  //       }, 1000);
  //     }, 500);
  //   }

  //   let answerState = null;
  //   if (answer.selectedAnswer && answer.isCorrect !== null) {
  //     answerState = answer.isCorrect ? "correct" : "wrong";
  //   } else if (answer.selectedAnswer) {
  //     answerState = "answered";
  //   }

  return (
    <div>
      <h2 className="text-3xl mb-2">{Questions[index].question}</h2>
      <Answers
        answers={Questions[index].options}
        userAnswers={userAnswers}
        handleSelectAnswer={onSelectAnswer}
        answerState={answerState}
      />
      <ProgressBar
        index={Questions[index].question}
        max={TIMER}
        onTimeOut={onTimeOut}
        paused={paused}
      />
    </div>
  );
}

export default Question;
