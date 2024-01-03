import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineMicrophone } from "react-icons/hi";
import { IoImageOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
import EmojiPicker from "emoji-picker-react";
import { postRequest } from "@/config/axiosInterceptor";
import { sendMessage } from "../Constants/apiEndpoints";
import { channelStore } from "@/store/channelStore";
import { getCookie } from "cookies-next";
import toast from "react-hot-toast";
import { chatStore } from "@/store/chatStore";
import socket from "@/lib/socketInstance";
import MediaPopup from "../popup/MediaPopup";

const ChatInput = ({ setMessages }) => {
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [mediaPicker, setMediaPicker] = useState(false);
  const chatDetails = chatStore((state) => state.chatDetails);
  const channelDetails = channelStore((state) => state.channelDetails);
  const [messageContent, setMessageContent] = useState("");
  const token = getCookie("token");

  const sendMsg = async () => {
    const body = {
      type: "Text",
      receiver: channelDetails.users,
      content: messageContent,
      chat: chatDetails._id,
    };
    try {
      const response = await postRequest({
        url: sendMessage,
        body: body,
        token: token,
      });
      const data = response.data.data;
      if (data) {
        console.log(data);
        setMessages((prev) => [...prev, data]);
        setMessageContent("");
        socket.emit("text_message", data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Oops!! Can't send message");
    }
  };
  return (
    <div className="w-full bg-white flex lg:px-4 px-2 py-3 justify-between items-center relative z-50 shadow-sm">
      {emojiPicker && (
        <div className="absolute bottom-20">
          <EmojiPicker height={500} width={300} />
        </div>
      )}
      <div className="bg-gray-100 flex gap-3 lg:px-5 px-2 py-4 rounded-xl items-center w-full">
        <HiOutlineMicrophone
          className="text-xl cursor-pointer"
          onClick={() => setEmojiPicker(false)}
        />
        <div className="cursor-pointer relative">
          <MediaPopup
            mediaPicker={mediaPicker}
            // setPopup={setPopup}
            setMediaPicker={setMediaPicker}
          />
          <IoImageOutline
            className="text-xl"
            onClick={() => setMediaPicker(!mediaPicker)}
          />
        </div>
        <BsEmojiSmile
          className="text-xl cursor-pointer"
          onClick={() => setEmojiPicker(!emojiPicker)}
        />
        <input
          type="text"
          placeholder="Type message"
          className="flex-1 lg:w-full w-1/2 bg-transparent focus:outline-none text-gray-500 lg:ml-2"
          onClick={() => setEmojiPicker(false)}
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
        />
        <VscSend
          className="text-2xl text-gray-500 cursor-pointer"
          onClick={sendMsg}
        />
      </div>
    </div>
  );
};

export default ChatInput;
