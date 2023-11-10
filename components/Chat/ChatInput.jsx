import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineMicrophone } from "react-icons/hi";
import { IoImageOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
import EmojiPicker from "emoji-picker-react";

const ChatInput = () => {
  const [emojiPicker, setEmojiPicker] = useState();
  return (
    <div className="w-full bg-white flex px-4 py-2.5 justify-between items-center relative z-50 shadow-sm">
      {emojiPicker && (
        <div className="absolute bottom-20">
          <EmojiPicker height={500} width={300} />
        </div>
      )}
      <div className="bg-gray-100 flex gap-3 px-5 py-4 rounded-xl items-center w-full">
        <HiOutlineMicrophone
          className="text-xl cursor-pointer"
          onClick={() => setEmojiPicker(false)}
        />
        <div className="cursor-pointer relative">
          <input
            type="file"
            className="opacity-0 text-[0.4rem] absolute cursor-pointer"
          />
          <IoImageOutline
            className="text-xl"
            onClick={() => setEmojiPicker(false)}
          />
        </div>
        <BsEmojiSmile
          className="text-xl cursor-pointer"
          onClick={() => setEmojiPicker(!emojiPicker)}
        />
        <input
          type="text"
          placeholder="Type message"
          className=" flex-1 bg-transparent focus:outline-none text-gray-500 ml-2"
          onClick={() => setEmojiPicker(false)}
        />
        <VscSend className="text-2xl text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatInput;
