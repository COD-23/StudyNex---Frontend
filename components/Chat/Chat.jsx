import React, { useEffect, useMemo, useState } from "react";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";
import { getCookie } from "cookies-next";
import { messageStore } from "@/store/messageStore";
import { isEmpty } from "lodash";
import { userDetailsStore } from "@/store/userStore";
import { getRequest } from "@/config/axiosInterceptor";
import { fetchMessages } from "../Constants/apiEndpoints";
import { chatStore } from "@/store/chatStore";
import toast from "react-hot-toast";
import socket from "@/lib/socketInstance";

const Chat = () => {
  // const messages = useMemo(
  //   () => [
  //     {
  //       type: "sender",
  //       message: "Hello",
  //       name: "Bhupendra Jogi",
  //       msg_type: "text",
  //     },
  //     {
  //       type: "receiver",
  //       message: "Hello! Heyy",
  //       name: "Vedant kale",
  //       msg_type: "text",
  //     },
  //     {
  //       type: "sender",
  //       message:
  //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, cupiditate?",
  //       name: "Elvish bhaii",
  //       msg_type: "text",
  //     },
  //     {
  //       type: "receiver",
  //       message: "Here you go",
  //       link: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
  //       name: "Vedant kale",
  //       msg_type: "image",
  //     },
  //     {
  //       type: "sender",
  //       message:
  //         "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  //       name: "Bhupendra Jogi",
  //       msg_type: "text",
  //     },
  //     {
  //       type: "receiver",
  //       message:
  //         "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  //       name: "Vedant kale",
  //       msg_type: "text",
  //     },
  //     {
  //       type: "receiver",
  //       message:
  //         "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  //       name: "Vedant kale",
  //       msg_type: "text",
  //     },
  //     {
  //       type: "sender",
  //       message:
  //         "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor.",
  //       name: "Elvish bahiii",
  //       link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&usqp=CAU",
  //       msg_type: "image",
  //     },
  //   ],
  //   []
  // );

  // const [messages, setMessages] = useState([]);
  const messages = messageStore((state) => state.messages);
  const [messageCopies, setMessageCopies] = useState([]);
  const userDetails = userDetailsStore((state) => state.userDetails);
  const [connectionStatus, setConnectionStatus] = useState(false);
  const chatDetails = chatStore((state) => state.chatDetails);
  const setMessages = messageStore((state) => state.setMessages);
  const token = getCookie("token");
  // let socket;

  // Establishing connection
  useEffect(() => {
    socket.emit("setup", userDetails);
    socket.on("connection", () => {
      setConnectionStatus(!connectionStatus);
    });
  }, []);

  // Message retrieval
  // useEffect(() => {

  // }, [])

  useEffect(() => {
    const fetchMsg = async () => {
      try {
        const response = await getRequest({
          url: fetchMessages,
          params: `/${chatDetails?._id}`,
          token: token,
        });
        const data = response.data.data;
        if (response.status) {
          setMessages(data);
          socket.emit("join chat", chatDetails?._id);
        }
      } catch (error) {
        console.log(error);
        toast.error("There is a problem fetching messages");
      }
    };
    fetchMsg();
    setMessageCopies(messages);
  }, [chatDetails]);

  useEffect(() => {
    socket.on("message received", (newMessage) => {
      if (messageCopies._id !== newMessage._id)
        setMessages([...messages], newMessage);
    });
  });

  return (
    <ScrollToBottom className="h-[calc(100vh-76px-72px)] relative w-full flex-1 bg-slate-100 overflow-y-scroll scrollbar-none">
      <div className="p-4 overflow-x-hidden flex flex-col gap-2">
        <div>
          <p className="text-center text-xs text-gray-500 my-2">
            Today, 07-11-2023
          </p>
        </div>
        {!isEmpty(messages) &&
          messages.map((data, index) => <Message key={index} data={data} />)}
      </div>
    </ScrollToBottom>
  );
};

export default Chat;
