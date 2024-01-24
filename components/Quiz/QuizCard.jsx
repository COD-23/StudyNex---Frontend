import { format } from 'date-fns';
import React from 'react'

const QuizCard = ({ setQuizId ,quiz}) => {
  return (
    <div
      className="border border-gray-300 w-full p-3 rounded-md text-blue-500 cursor-pointer "
      onClick={() => setQuizId(quiz._id)}
    >
      <p className="text-xl">{quiz.title}</p>
      <div className="flex gap-7">
        <p className="text-gray-500">10 Questions</p>
        <p className="text-gray-500">10 Points</p>
      </div>
      <p>{format(new Date(quiz?.createdAt), "dd MMM, yyyy")}</p>
    </div>
  );
};

export default QuizCard