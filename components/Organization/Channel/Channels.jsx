import React, { useEffect } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { generalChannelStore } from "@/store/generalChannelStore";
import { initiateChat, loadChannelData } from "@/lib/ChannelApi";
import { channelStore } from "@/store/channelStore";
import { chatStore } from "@/store/chatStore";
import { activeOrgChannel } from "@/store/activeOrgChannel";

export const OrgChannels = ({ data, index }) => {
  const Icon = data.icon;
  const generalChannel = generalChannelStore((state) => state.generalChannel);
  const setChannelDetails = channelStore((state) => state.setChannelDetails);
  const setChatDetails = chatStore((state) => state.setChatDetails);
  const orgActiveChannel = activeOrgChannel((state) => state.orgChannel);
  const setOrgActiveChannel = activeOrgChannel((state) => state.setOrgChannel);

  const handleChannelClick = async (channel) => {
    if (channel === "General") {
      const channelData = await loadChannelData(generalChannel?._id);
      const chatData = await initiateChat(
        generalChannel?.name,
        generalChannel?.users
      );
      setChannelDetails(channelData ? channelData : null);
      setChatDetails(chatData ? chatData : null);
    }
    setOrgActiveChannel(channel);
  };
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.1 * index,
        type: "spring",
      }}
      className={classNames(
        "flex datas-center gap-4 p-2 lg:cursor-pointer rounded-md hover:bg-gray-100",
        orgActiveChannel == data.name &&
          "gradient-transition text-white hover:bg-[#919eb7]"
      )}
      onClick={() => handleChannelClick(data.name)}
    >
      <Icon className="h-6 w-6" />
      <p
        className={classNames(orgActiveChannel == data.name && "font-semibold")}
      >
        {data.name}
      </p>
    </motion.li>
  );
};

export const UserChannels = ({ data, index, setActiveMobile }) => {
  const setChannelDetails = channelStore((state) => state.setChannelDetails);
  const setChatDetails = chatStore((state) => state.setChatDetails);
  const orgActiveChannel = activeOrgChannel((state) => state.orgChannel);
  const setOrgActiveChannel = activeOrgChannel((state) => state.setOrgChannel);
  const orgChannels = ["General", "Assessments", "Leaderboard"];

  const handleChannelClick = async () => {
    setOrgActiveChannel(data.name)
    const channelData = await loadChannelData(data?._id);
    const chatData = await initiateChat(data?.name, data?.users);
    setChannelDetails(channelData ? channelData : null);
    setChatDetails(chatData ? chatData : null);
    window.history.pushState("#", null, null);
    setActiveMobile(true);
  };

  // useEffect(() => {
  //   !orgChannels.includes(orgActiveChannel) && handleChannelClick();
  // }, [orgActiveChannel]);

  return (
    data?.name !== "General" && (
      <motion.li
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.05 * index,
          type: "keyframes",
        }}
        key={index}
        className="flex items-center relative py-5"
        // onClick={() => setOrgActiveChannel(data.name)}
        onClick={handleChannelClick}
      >
        <div className="border-2 border-t-gray-300 border-b-0 w-5" />
        <div
          className={classNames(
            "absolute left-8 right-0 flex gap-1 datas-center p-2  lg:cursor-pointer rounded-md hover:bg-gray-100",
            orgActiveChannel == data.name &&
              "gradient-transition text-white hover:bg-[#919eb7]"
          )}
        >
          <p
            className={classNames(
              orgActiveChannel == data.name && "font-semibold"
            )}
          >
            #
          </p>
          <p
            className={classNames(
              orgActiveChannel == data.name && "font-semibold"
            )}
          >
            {data?.name}
          </p>
        </div>
      </motion.li>
    )
  );
};
