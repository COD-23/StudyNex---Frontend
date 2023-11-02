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
import { CgMenuGridR } from "react-icons/cg";

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

  const [showMenu, setShowMenu] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="sticky top-0 left-0  w-full h-screen p-5 z-[999] bg-white shadow-xl shadow-gray-400"
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
      <hr className="absolute inset-x-0  bg-white h-[2px] w-full" />

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
                "flex items-center p-2 transition-all duration-300 lg:cursor-pointer hover:bg-[#c4f4ea]",
                activeTab == item.label && "bg-[#c4f4ea] "
              )}
              onClick={() => setActiveTab(item.label)}
            >
              <FaHashtag className="h-4 w-4 " />
              <p
                className={classNames(
                  activeTab == item.label && "font-semibold"
                )}
              >
                {item.label}
              </p>
            </motion.li>
          );
        })}
      </ul>
      <hr className="absolute inset-x-0  bg-white h-[2px] w-full" />

      {/* Custom Section */}
      <ul className="grid gap-2 mt-6 relative h-[calc(100vh-50vh)] overflow-scroll scrollbar-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center sticky top-0 z-50 bg-white"
        >
          <div className="absolute border-2 top-10 border-r-gray-300 border-l-0 h-[calc(100vh-50vh)]" />
          <p className="font-semibold text-lg">Your Channels</p>
          {/* <div
            className="bg-[#acf3e4] active:bg-[#c4f4ea] transition-all duration-200 p-2 rounded-full cursor-pointer relative"
            onClick={addChannel}
          >
            <FaPlus className="h-4 w-4" />
          </div> */}
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
              className={classNames("flex items-center relative py-5")}
              onClick={() => setActiveTab(item.label)}
            >
              <div className="border-2 border-t-gray-300 border-b-0 w-5" />
              <div
                className={classNames(
                  "absolute left-8 right-0 flex items-center p-2 transition-all duration-300 lg:cursor-pointer hover:bg-[#c4f4ea]",
                  activeTab == item.label && "bg-[#c4f4ea] font-semibold"
                )}
              >
                <FaHashtag className="h-4 w-4 " />
                <p
                  className={classNames(
                    "text-sm",
                    activeTab == item.label && "font-semibold"
                  )}
                >
                  {item.label}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>
      <hr className="absolute inset-x-0  bg-white h-[2px] w-full" />

      <motion.div
        className="grid gap-4 py-5 place-items-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: 100,
              scale: 0,
              type: "spring",
            }}
            transition={{
              duration: 0.5,
              type: "spring",
            }}
            className="absolute -top-24 grid gap-4 w-fit h-fit p-4 bg-white border border-gray-100 shadow-lg"
          >
            <div className="flex items-center gap-4 lg:cursor-pointer">
              <FaPlus className="w-4 h-4" />
              <p className="">Create Channel</p>
            </div>
            <div className="flex items-center gap-4 lg:cursor-pointer">
              <FaPlus className="w-4 h-4" />
              <p className="">Join Channel</p>
            </div>
          </motion.div>
        )}
        <div
          className="bg-[#acf3e4] active:bg-[#c4f4ea] transition-all duration-200 p-2 rounded-full cursor-pointer relative"
          onClick={() => setShowMenu(!showMenu)}
        >
          <CgMenuGridR className="h-5 w-5" />
        </div>
        <div className="flex items-center gap-4 lg:cursor-pointer">
          <MdOutlineLogout className="text-red-600 w-6 h-6" />
          <p className="text-red-600">Leave Organization</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
