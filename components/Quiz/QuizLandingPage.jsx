"use client"
import React, { useState } from "react";
import quiz from "../../quiz.json";
import Quiz from "./Quiz";
import { ChevronLeft, ChevronRight } from "lucide-react";

const QuizLandingPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [newQuiz, setNewQuiz] = useState(quiz);

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswer = (selectedAnswer) => {
    setNewQuiz((prevQuiz) => {
      const updatedQuestions = [...prevQuiz.questions];
      updatedQuestions[currentQuestionIndex].userAnswers = selectedAnswer;
      return { ...prevQuiz, questions: updatedQuestions };
    });
  };

  return (
    <div>
      <div className="bg-white rounded-lg pb-4 h-screen">
        <div className="grid md:grid-cols-[156px,1fr,156px] h-full place-content-center md:gap-8 py-5 max-w-maxContainer mx-auto">
          <div></div>
          {/* quiz */}
          <div className="bg-white rounded-lg border border-gray-200">
            {/* title */}
            <div className="px-10 pt-8 text-center">
              <p className="text-lg font-bold py-4">{newQuiz.title}</p>
            </div>

            {/* question */}
            <Quiz
              question={newQuiz.questions[currentQuestionIndex]}
              handleAnswer={handleAnswer}
            />

            {/* button */}
            <div className="px-10 pb-8 w-full flex justify-between">
              <button
                onClick={handlePrevious}
                className={`text-white flex justify-center px-4 py-2 rounded-md ${
                  currentQuestionIndex == 0
                    ? "invisible"
                    : "gradient-transition"
                }`}
              >
                <p className={`text-lg flex items-center gap-4`}>
                  <ChevronLeft /> Previous{" "}
                </p>
              </button>
              <button
                onClick={handleNext}
                className="gradient-transition text-white flex justify-center px-4 py-2 rounded-md"
              >
                {currentQuestionIndex == newQuiz.questions.length - 1 ? (
                  <p className="text-lg flex items-center gap-4">Finish</p>
                ) : (
                  <p className="text-lg flex items-center gap-4">
                    Next <ChevronRight />{" "}
                  </p>
                )}
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default QuizLandingPage;
