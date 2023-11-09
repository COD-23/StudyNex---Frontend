"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import classNames from "classnames";
import { MdGroups2, MdOutlineQuiz } from "react-icons/md";
import { motion } from "framer-motion";
import { CgMenuGridR } from "react-icons/cg";
import { channelProfileStore } from "@/store/channelProfileStore";
import { orgStore } from "@/store/orgStore";
import { getRequest } from "@/config/axiosInterceptor";
import { getChannel } from "../Constants/apiEndpoints";
import { getCookie } from "cookies-next";
import toast from "react-hot-toast";
import { channelStore } from "@/store/channelStore";
import { userDetailsStore } from "@/store/userStore";
import { nameInitials } from "@/helperFunctions/nameInitials";
import MenuPopup from "../popup/MenuPopup";

const SideBar = ({ channelsData, setPopup, setActiveTab, activeTab }) => {
  const setShowChannelProfile = channelProfileStore(
    (state) => state.setShowChannelProfile
  );
  const orgDetails = orgStore((state) => state.orgDetails);
  const token = getCookie("token");
  const setChannelDetails = channelStore((state) => state.setChannelDetails);
  const userDetails = userDetailsStore((state) => state.userDetails);

  const commonTabs = useMemo(() => [
    {
      label: "General",
      link: "/Home",
      icon: MdGroups2,
    },
    {
      label: "Assessments",
      link: "About",
      icon: MdOutlineQuiz,
    },
  ],[]);

  const loadChannelData = async (id) => {
    try {
      const response = await getRequest({
        url: getChannel,
        params: `/${id}`,
        token: token,
      });
      const data = response.data.data;
      if (response.status) {
        setChannelDetails(data);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  const [showMenu, setShowMenu] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative top-0 left-0 flex flex-col  w-3/4 lg:w-full h-screen  px-5 py-2 z-[51] bg-white shadow-xl"
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
          src={orgDetails?.image}
          alt="org logo"
          width="50"
          height="50"
          className="rounded-full h-12 w-12  object-cover"
        />
        <h1 className="text-md font-bold line-clamp-2">{orgDetails?.name}</h1>
      </motion.div>
      <hr className="bg-white h-[2px]" />

      {/* Common Section */}
      <ul className="grid gap-2 py-5">
        {commonTabs.map((item, index) => {
          const Icon = item.icon;
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
                "flex items-center gap-4 p-2 lg:cursor-pointer rounded-md hover:bg-gray-100",
                activeTab == item.label &&
                  "gradient-transition text-white hover:bg-[#919eb7]"
              )}
              onClick={() => setActiveTab(item.label)}
            >
              <Icon className="h-6 w-6" />
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
      <hr className="bg-white h-[2px]" />

      {/* Custom Section */}
      <ul className="flex-1 flex flex-col gap-2 mt-6 relative h-[calc(100vh-370px)] overflow-scroll scrollbar-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center sticky top-0 z-50 bg-white"
        >
          <div className="absolute border-2 top-10 border-r-gray-300 border-l-0 h-[calc(100vh-370px)]" />
          <p className="font-semibold text-lg">Your Channels</p>
        </motion.div>

        {channelsData?.map((item, index) => {
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
              onClick={() => {
                setActiveTab(item.name);
                setShowChannelProfile(true);
                loadChannelData(item?._id);
              }}
            >
              <div className="border-2 border-t-gray-300 border-b-0 w-5" />
              <div
                className={classNames(
                  "absolute left-8 right-0 flex gap-1 items-center p-2  lg:cursor-pointer rounded-md hover:bg-gray-100",
                  activeTab == item.name &&
                    "gradient-transition text-white hover:bg-[#919eb7]"
                )}
              >
                <p
                  className={classNames(
                    activeTab == item.name && "font-semibold"
                  )}
                >
                  #
                </p>
                <p
                  className={classNames(
                    activeTab == item.name && "font-semibold"
                  )}
                >
                  {item.name}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>

      {/* Profile Section */}
      <motion.div
        className="grid pt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <hr className="w-full h-[2px]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex gap-3 items-center relative py-2 md:cursor-pointer"
        >
          <MenuPopup
            showMenu={showMenu}
            setPopup={setPopup}
            setShowMenu={setShowMenu}
          />
          {userDetails.image ? (
            <Image
              src={userDetails.image}
              alt="org logo"
              width="50"
              height="50"
              className="rounded-full h-12 w-12 object-cover"
            />
          ) : (
            <div className="bg-nack flex justify-center items-center h-12 w-12 rounded-full">
              <p className="text-lg text-center">
                {nameInitials(userDetails.name)}
              </p>
            </div>
          )}
          <div className="line-clamp-2 text-left flex-1">
            <p className="text-md font-bold">{userDetails.name}</p>
            <p className="text-xs text-gray-400">{userDetails.username}</p>
          </div>
          <div
            className="w-fit h-fit gradient-transition text-white transition-all duration-200 p-2 rounded-full lg:cursor-pointer relative"
            onClick={() => setShowMenu(!showMenu)}
          >
            <CgMenuGridR
              className={classNames(
                "h-5 w-5 transition-all duration-200",
                showMenu && "rotate-45"
              )}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
