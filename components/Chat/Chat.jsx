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
import { MessageSkeleton } from "../Layouts/Skeleton";
import { format, isToday, isYesterday } from "date-fns";

const Chat = ({ messages, setMessages }) => {
  const [messageCopies, setMessageCopies] = useState([]);
  const userDetails = userDetailsStore((state) => state.userDetails);
  const [connectionStatus, setConnectionStatus] = useState(false);
  const chatDetails = chatStore((state) => state.chatDetails);
  const token = getCookie("token");
  // const postedDate = new Date(data?.createdAt);
  const currentDate = new Date();
  let lastFormattedDate;
  let dateHeading;

  // Establishing connection
  useEffect(() => {
    socket.emit("setup", userDetails);
    socket.on("connection", () => {
      setConnectionStatus(!connectionStatus);
      console.log("Connected to socket");
    });
  }, []);

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
      console.log("socket message received: " + newMessage);
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

  const checkDateHeader = (postedDate) => {
    lastFormattedDate = dateHeading;
    if (isToday(postedDate)) {
      dateHeading = "Today";
    } else if (isYesterday(postedDate)) dateHeading = "Yesterday";
    else {
      dateHeading = format(postedDate, "dd/MM/yyyy");
    }

    return lastFormattedDate !== dateHeading ? dateHeading : null;
  };

  return (
    <ScrollToBottom className="h-[calc(100vh-76px-72px)] relative w-full flex-1 bg-slate-100 overflow-y-scroll scrollbar-none">
      <div className="p-4 overflow-x-hidden flex flex-col gap-2">
        {!isEmpty(messages) ?
          messages.map((data, index) => (
            <React.Fragment key={index}>
              <div>
                <p className="text-center text-xs text-gray-500 my-2">
                  {checkDateHeader(new Date(data?.createdAt))}
                </p>
              </div>
              <Message
                key={index}
                data={data}
                messages={messages}
                setMessages={setMessages}
              />
            </React.Fragment>
          )) : <MessageSkeleton/>}
      </div>
    </ScrollToBottom>
  );
};

export default Chat;
