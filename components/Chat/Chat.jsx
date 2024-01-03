import React, { useEffect, useMemo, useState } from "react";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";
import { getCookie } from "cookies-next";
import { isEmpty } from "lodash";
import { userDetailsStore } from "@/store/userStore";
import { getRequest } from "@/config/axiosInterceptor";
import { fetchMessages } from "../Constants/apiEndpoints";
import { chatStore } from "@/store/chatStore";
import toast from "react-hot-toast";
import socket from "@/lib/socketInstance";

const Chat = ({ messages, setMessages }) => {
  const [messageCopies, setMessageCopies] = useState([]);
  const userDetails = userDetailsStore((state) => state.userDetails);
  const [connectionStatus, setConnectionStatus] = useState(false);
  const chatDetails = chatStore((state) => state.chatDetails);
  const token = getCookie("token");

  // Establishing connection
  useEffect(() => {
    socket.emit("setup", userDetails);
    socket.on("connection", () => {
      setConnectionStatus(!connectionStatus);
      console.log("Connected to socket");
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
    const handleReceivedMessage = (newMessage) => {
      const lastMessage = messages[messages.length - 1];
      if (!lastMessage || lastMessage._id !== newMessage._id) {
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    const handleError = (error) => {
      console.error("Socket error:", error);
    };

    if (!isEmpty(messages)) {
      socket.on("message_received", handleReceivedMessage);
      socket.on("error", handleError);
    }
    return () => {
      socket.off("message_received", handleReceivedMessage);
      socket.off("error", handleError);
    };
  }, [messages]);

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
