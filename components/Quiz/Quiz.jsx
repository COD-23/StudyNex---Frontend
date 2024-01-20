import { Image } from "lucide-react";
import React from "react";

const Quiz = ({ question, handleAnswer = () => void 0 }) => {
  return (
    <div className="px-10 py-8">
      <p className="text-base font-semibold">
        Q {question.id} : {question?.question}
      </p>
      {question?.image && (
        <div className="p-4 md:max-w-[732px] max-w-[80vw] md:max-h-[420px] max-h-[80vh] relative object-contain aspect-video">
          <Image src={`${question?.image}?format=webp`} alt="" fill />
        </div>
      )}
      {question?.options?.map((option, index) => (
        <div
          key={index}
          onClick={() => handleAnswer(option)}
          className={`border-dashed border rounded-lg border-gray-400 mt-4 items-center cursor-pointer  ${
            question.userAnswers == option
              ? "bg-blue-100"
              : "hover:bg-slate-100"
          }`}
        >
          <div
            className="p-3 flex justify-between"
            name={option}
          >
            <span>{option}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
