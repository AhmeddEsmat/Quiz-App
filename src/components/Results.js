import React from "react";
import QuizLogo from "../assets/quiz-complete.png";
import { Questions } from "../Questions";
import PercentageContainer from "./PercentageContainer";

function Results({ userAnswers, quizCssContainer, quizCss }) {
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === Questions[index].correct
  ).length;
  const correctPercentage = Math.round(
    (correctAnswers / Questions.length) * 100
  );
  const skippedPercentage = Math.round(
    (userAnswers.filter((answer) => answer === "unanswered").length /
      Questions.length) *
      100
  );

  return (
    <div className={quizCssContainer + " mb-8"}>
      <div
        className={quizCss + " flex flex-col justify-start items-center h-min"}
      >
        <img src={QuizLogo} alt="" className="w-1/12 pt-2" />
        <div className="mt-[0.35rem]">
          <h2 className="text-3xl mb-2">Quiz Complete!</h2>
          <h3 className="text-xl font-light">
            You scored {correctAnswers} out of {Questions.length}
          </h3>
          <div className="flex flex-row justify-evenly my-2">
            <PercentageContainer
              percentage={correctPercentage}
              type={"correct"}
            />
            <PercentageContainer
              percentage={100 - correctPercentage}
              type={"incorrect"}
            />
            <PercentageContainer
              percentage={skippedPercentage}
              type={"skipped"}
            />
          </div>
          <hr className="mt-4 w-96" />
          <p className="mt-4">
            {userAnswers.map((answer, index) => {
              return (
                <>
                  <p>
                    {" "}
                    <span>{index + 1}) </span>
                    {Questions[index].question}{" "}
                  </p>
                  <span
                    key={index}
                    className={
                      answer === Questions[index].correct
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {Questions[index].correct}
                  </span>
                </>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Results;
