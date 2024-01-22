import { getRequest } from "@/config/axiosInterceptor";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getQuizDetail } from "../Constants/apiEndpoints";
import { getCookie } from "cookies-next";
import toast from "react-hot-toast";
import Quiz from "./Quiz";
const AllQuiz = ({ setCreatePage, quizData }) => {
  const [quizId, setQuizId] = useState(null);
  return !quizId ? (
    <>
      <div className="grid gap-3">
        <p className="font-bold">All Quizzes</p>
        <button
          onClick={() => setCreatePage(true)}
          className="bg-blue-500 text-white rounded-md px-4 py-2 w-fit"
        >
          Create new Quiz
        </button>
      </div>

      <div
        className={`border border-gray-300 rounded-lg h-full ${
          !quizData
            ? "flex"
            : "grid lg:grid-cols-3 grid-cols-1 place-content-start lg:p-5 overflow-scroll"
        } flex-col justify-center items-center gap-3 lg:p-0 p-5`}
      >
        {!quizData ? (
          <>
            <p className="text-lg">No quizzes added for students</p>
            <p className="text-sm text-gray-500 text-center">
              Your teacher hasn&apos;t assigned any quizzes for you. For the
              main time,
              <br />
              chill with your friends.
            </p>
          </>
        ) : (
          <>
            {quizData &&
              quizData.map((quiz, index) => (
                <div
                  key={index}
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
              ))}
          </>
        )}
      </div>
    </>
  ) : (
    <QuizDetails setQuizId={setQuizId} quizId={quizId} />
  );
};

export default AllQuiz;

const QuizDetails = ({ setQuizId, quizId }) => {
  const [data, setData] = useState(null);
  const [quizData, setQuizData] = useState(null);
  const [submissionData, setSubmissionData] = useState(null);
  const [isLoading, setLoading] = useState(null);
  const [submissionsTrue, setSubmissionTrue] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getRequest({
        url: getQuizDetail,
        params: `?quiz_id=${quizId}`,
        token: getCookie("token"),
      });
      const res = response.data.data;
      if (response.status) {
        setData(JSON.parse(res?.quiz[0]?.quiz));
        setQuizData(res?.quiz[0]);
        setSubmissionData(res.submissions);
        setLoading(false);
      }
    } catch (error) {
      toast.error("Something went wrong!!");
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [quizId]);

  return !submissionsTrue ? (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex gap-5 px-10">
        <button
          onClick={() => setQuizId(null)}
          className="bg-blue-500 text-white rounded-md px-4 py-2  w-fit flex gap-2"
        >
          <ArrowLeft />
          Back
        </button>
        {data && <button
          onClick={() => setSubmissionTrue(true)}
          className="bg-blue-500 text-white rounded-md px-4 py-2  w-fit flex gap-2"
        >
          Check Submissions
        </button>}
      </div>
      <div className="flex justify-between px-10">
        <p className="font-bold">Quiz title : {quizData?.title}</p>
        <p>10 Points</p>
      </div>

      {!isLoading ? (
        <div>
          {data &&
            data.map((quiz, index) => (
              <Quiz key={index} question={quiz} listing={true} />
            ))}
        </div>
      ) : (
        // loader
        <div className="flex justify-center items-center h-full">
          <div class="loader"></div>
        </div>
      )}
    </div>
  ) : (
    <div className="px-10">
      <button
        onClick={() => setSubmissionTrue(false)}
        className="bg-blue-500 text-white rounded-md px-4 py-2  w-fit flex gap-2"
      >
        <ArrowLeft />
        Back
      </button>
    </div>
  );
};
