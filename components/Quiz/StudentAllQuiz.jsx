"use client";
import React, { useEffect, useState } from "react";
import QuizCard from "./QuizCard";
import { Box, Tab, Tabs } from "@mui/material";
import StudentQuizList from "./StudentQuizList";
import { getRequest } from "@/config/axiosInterceptor";
import { getUserQuizzes } from "../Constants/apiEndpoints";
import { getCookie } from "cookies-next";
import CustomTabPanel from "./CustomeTabPanel";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const StudentAllQuiz = ({ quizData }) => {
  const [quiz, setQuiz] = useState(null);
  const [value, setValue] = useState(0);
  const [selectValue, setSelectValue] = useState('assigned');
  const [isLoading, setLoading] = useState(0);

  useEffect(() => {
    setQuiz(quizData);
  }, [quizData]);

  const handleChange = async (event, newValue) => {
    setValue(newValue);
    setLoading(true);
    const urlParams = new URLSearchParams(window.location.search);
    try {
      const response = await getRequest({
        url: getUserQuizzes,
        params: `?org_id=${urlParams.get("org_id")}&channel_id=${urlParams.get(
          "channel_id"
        )}${newValue === 0 ? "&active=true" : ""}`,
        token: getCookie("token"),
      });
      const data = response.data.data;
      if (response.status) {
        setQuiz(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="lg:mx-[350px] mx-6">
      <div className="py-4 pb-10 flex flex-col gap-10 h-[calc(100vh-72px)] overflow-scroll scrollbar-none">
        <div className="grid gap-3">
          <p className="font-bold">All Quizzes</p>
        </div>

        <div className="flex gap-2">
          <Box sx={{ borderBottom: 1, borderColor: "divider", flex: "1" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Active" {...a11yProps(0)} />
              <Tab label="Past" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <div className="flex justify-end">
            <select
              name=""
              id=""
              className="bg-transparent border rounded-md px-4 text-gray-500"
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option value="assigned" selected>Assigned</option>
              <option value="done">Done</option>
            </select>
          </div>
        </div>
        <CustomTabPanel value={value} index={0}>
          <StudentQuizList quizData={quiz} isLoading={isLoading} selectValue={selectValue}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <StudentQuizList quizData={quiz} isLoading={isLoading} selectValue={selectValue}/>
        </CustomTabPanel>
      </div>
    </div>
  );
};

export default StudentAllQuiz;
