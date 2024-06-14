import React, { useEffect, useState } from "react";

function Answers({ answers, userAnswers, handleSelectAnswer, answerState }) {
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    if (answers && answers.length) {
      setShuffledOptions([...answers].sort(() => Math.random() - 0.5));
    }
  }, [answers]);

  return (
    <div>
      {shuffledOptions.map((option, index) => {
        const isSelected = userAnswers.includes(option);
        let answerCss =
          "text-xl w-full bg-[#a76cb7] p-2 rounded-lg my-2 hover:bg-[#9550a7] transition-colors duration-300";
        if (answerState === "answered") {
          if (isSelected) {
            answerCss =
              "text-xl w-full bg-gray-600 p-2 rounded-lg my-2 transition-colors duration-300";
          } else {
            answerCss =
              "text-xl w-full bg-[#a76cb7] p-2 rounded-lg my-2 opacity-50 transition-opacity duration-300";
          }
        } else if (answerState === "correct") {
          if (isSelected) {
            answerCss =
              "text-xl w-full bg-green-600 p-2 rounded-lg my-2 transition-colors duration-300";
          } else {
            answerCss =
              "text-xl w-full bg-[#a76cb7] p-2 rounded-lg my-2 opacity-50 transition-opacity duration-300";
          }
        } else if (answerState === "wrong") {
          if (isSelected) {
            answerCss =
              "text-xl w-full bg-red-700 p-2 rounded-lg my-2 transition-colors duration-300";
          } else {
            answerCss =
              "text-xl w-full bg-[#a76cb7] p-2 rounded-lg my-2 opacity-50 transition-opacity duration-300";
          }
        }
        return (
          <div key={index}>
            <button
              className={answerCss}
              onClick={() => {
                handleSelectAnswer(option);
              }}
              disabled={answerState !== null}
            >
              {option}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Answers;
