"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import {
  StudyLogo,
  TeacherLogo,
  TeacherLogo2,
} from "../Constants/imageContants";
import { FaHashtag, FaPlus } from "react-icons/fa";
import classNames from "classnames";
import { MdOutlineLogout } from "react-icons/md";
import { motion } from "framer-motion";

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
    {
      label: "Your Channel 2",
      link: "",
    },
    {
      label: "Your Channel 2",
      link: "",
    },
    {
      label: "Your Channel 2",
      link: "",
    },
    {
      label: "Your Channel 2",
      link: "",
    },
    {
      label: "Your Channel 2",
      link: "",
    },
    {
      label: "Your Channel 2",
      link: "",
    },
    {
      label: "Your Channel 2",
      link: "",
    },
    {
      label: "Your Channel 2",
      link: "",
    },
  ]);

  const addChannel = () => {};
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="sticky top-0 left-0 bg-[#e9f8f5] w-full h-screen p-5 z-[999] shadow-xl shadow-[#e9f8f5]"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex gap-4 items-center relative py-3 md:cursor-pointer"
        onClick={() => window.location.reload()}
      >
        <Image
          src={TeacherLogo}
          alt="org logo"
          className="rounded-full h-16 w-16  object-cover"
        />
        <h1 className="text-2xl font-bold ">VJTI</h1>
      </motion.div>
      <hr className="absolute inset-x-0  bg-green-200 h-[2px] w-full" />

      {/* Common Section */}
      <ul className="grid gap-4 py-5">
        {commonTabs.map((item, index) => {
          return (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.1 * index,
                type: "spring",
              }}
              key={index}
              className={classNames(
                "flex gap-4 items-center p-2 transition-all duration-300 lg:cursor-pointer hover:bg-[#c4f4ea]",
                activeTab == item.label && "bg-[#c4f4ea]"
              )}
              onClick={() => setActiveTab(item.label)}
            >
              <FaHashtag className="h-4 w-4 " />
              <p className="  text-md">{item.label}</p>
            </motion.li>
          );
        })}
      </ul>
      <hr className="absolute inset-x-0  bg-green-200 h-[2px] w-full" />

      {/* Custom Section */}
      <ul className="grid gap-2 mt-6 relative h-[calc(100vh-50vh)] overflow-scroll scrollbar-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center sticky top-0 z-50 bg-[#e9f8f5]"
        >
          <div className="absolute border-2 top-10 border-r-green-200 border-l-0 h-[calc(100vh-50vh)]" />
          <p className=" ">Your Channels</p>
          <div
            className="bg-[#acf3e4] active:bg-[#c4f4ea] transition-all duration-200 p-2 rounded-full cursor-pointer relative"
            onClick={addChannel}
          >
            <FaPlus className="h-4 w-4" />
          </div>
        </motion.div>

        {yourSection.map((item, index) => {
          return (
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                // duration:0.6,
                delay: 0.05 * index,
                type: "keyframes",
              }}
              key={index}
              className={classNames("flex gap-4 items-center relative py-6")}
              onClick={() => setActiveTab(item.label)}
            >
              <div className="border-2 border-t-green-200  border-b-0 w-5" />
              <div
                className={classNames(
                  "absolute left-10 right-0 flex gap-4 items-center p-2 transition-all duration-300 lg:cursor-pointer hover:bg-[#c4f4ea]",
                  activeTab == item.label && "bg-[#c4f4ea]"
                )}
              >
                <FaHashtag className="h-4 w-4 " />
                <p className="text-md">{item.label}</p>
              </div>
            </motion.li>
          );
        })}
      </ul>
      <hr className="absolute inset-x-0  bg-green-200 h-[2px] w-full" />

      <motion.div
        className="grid gap-4 py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center gap-4 lg:cursor-pointer">
          <MdOutlineLogout className="text-red-600 w-6 h-6" />
          <p className="text-red-600">Leave Organization</p>
        </div>
        <div className="flex items-center gap-4 lg:cursor-pointer">
          <MdOutlineLogout className="text-red-600 w-6 h-6" />
          <p className="text-red-600">Anything else</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
