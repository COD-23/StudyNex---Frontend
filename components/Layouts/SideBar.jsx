"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { StudyLogo, TeacherLogo } from "../Constants/imageContants";
import { FaHashtag } from "react-icons/fa";
import classNames from "classnames";

const SideBar = ({ data }) => {
  const [activeTab, setActiveTab] = useState("General");
  const commonTabs = useMemo(() => [
    {
      label: "General",
      link: "/Home",
    },
    {
      label: "Assessments",
      link: "About",
    },
  ]);

  const yourSection = useMemo(() => [
    {
      label: "Your Channel 1",
      link: "/",
    },
    {
      label: "Your Channel 2",
      link: "",
    },
  ]);

  const addChannel = () => {};
  return (
    <div className="sticky inset-y-0 left-0 bg-violet-900 w-full h-screen p-5">
      <div className="flex gap-10 items-center relative py-3">
        <div className="px-4 py-1 rounded-lg bg-blue-400">
          <p className="text-2xl  text-center">V</p>
        </div>
        <h1 className="text-2xl font-bold text-white">VJTI</h1>
      </div>
      <hr className="absolute inset-x-0  bg-gray-100 h-[1px] w-full" />

      <ul className="grid gap-4 py-5">
        {commonTabs.map((item, index) => {
          return (
            <li
              key={index}
              className={classNames(
                "flex gap-4 items-center p-2 rounded-2xl transition-all duration-300 lg:cursor-pointer hover:bg-violet-800",
                activeTab == item.label && "bg-violet-800"
              )}
              onClick={() => setActiveTab(item.label)}
            >
              <FaHashtag className="h-4 w-4 text-white" />
              <p className="text-white  text-md">{item.label}</p>
            </li>
          );
        })}
      </ul>
      <hr className="absolute inset-x-0  bg-gray-100 h-[1px] w-full" />

      <ul className="grid gap-4 py-5">
        <div className="flex justify-between items-center">
          <p className="text-white ">Your Channels</p>
          <div
            className="bg-violet-700 active:bg-violet-800 transition-all duration-200 px-2 rounded-full cursor-pointer group relative"
            onClick={addChannel}
          >
            <p className="text-white text-xl active:rotate-180"> + </p>
            {/* <div className="group-hover:block absolute top-10 bg-black ">
              <p className="text-white">Create your channel</p>
            </div> */}
          </div>
        </div>
        {yourSection.map((item, index) => {
          return (
            <li
              key={index}
              className={classNames(
                "flex gap-4 items-center p-2 rounded-2xl transition-all duration-300 lg:cursor-pointer",
                activeTab == item.label && "bg-violet-800"
              )}
              onClick={() => setActiveTab(item.label)}
            >
              <FaHashtag className="h-4 w-4 text-white" />
              <p className="text-white  text-md">{item.label}</p>
            </li>
          );
        })}
      </ul>
      {/* <hr className="absolute inset-x-0  bg-gray-100 h-[1px] w-full" /> */}
    </div>
  );
};

export default SideBar;
