import Image from "next/image";
import React from "react";
import { QuizLogo } from "../Constants/imageContants";
import ChannelMenuPopup from "../popup/ChannelMenuDropdown";
import { channelProfileStore } from "@/store/channelProfileStore";
import { channelStore } from "@/store/channelStore";

const ChatNavbar = () => {
  const setShowChannelProfile = channelProfileStore(
    (state) => state.setShowChannelProfile
  );
  const channelDetails = channelStore((state) => state.channelDetails);
  return (
    <div className="w-full bg-white flex px-4 py-3 justify-between items-center z-50 shadow-sm">
      <div
        className="flex gap-3 items-center cursor-pointer"
        onClick={() => {
          window.history.pushState("#",null,null);
          setShowChannelProfile(true);
        }}
      >
        <Image src={QuizLogo} alt="" className="w-12 h-12 rounded-full" />
        <div>
          <p>{channelDetails?.name}</p>
          <p className="text-gray-500 text-xs line-clamp-1">
            {channelDetails?.description}
          </p>
        </div>
      </div>
      <div className="flex gap-3 text-2xl">
        <ChannelMenuPopup data={channelDetails} />
      </div>
    </div>
  );
};

export default ChatNavbar;
