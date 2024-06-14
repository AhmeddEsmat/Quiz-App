import React from "react";
import QuizLogo from "../assets/quiz-logo.png";

function Header() {
  return (
    <header className="flex flex-col justify-center items-center pt-12">
      <img src={QuizLogo} alt="Quiz App Logo" className="w-16 mb-3" />
      <h2 className="text-4xl font-ubuntu tracking-wider text-gray-300 uppercase">
        Quiz
      </h2>
    </header>
  );
}

export default Header;
