import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineMicrophone } from "react-icons/hi";
import { IoImageOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
const ChatInput = () => {
  return (
    <div className="w-full bg-white flex px-4 py-2.5 justify-between items-center">
      <div className="bg-gray-100 flex gap-3 px-5 py-4 rounded-xl items-center w-full">
        <HiOutlineMicrophone className="text-xl cursor-pointer" />
        <IoImageOutline className="text-xl cursor-pointer" />
        <BsEmojiSmile className="text-xl cursor-pointer" />
        <input
          type="text"
          placeholder="Type message"
          className=" flex-1 bg-transparent focus:outline-none text-gray-500 ml-2"
        />
        <VscSend className="text-2xl text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatInput;
