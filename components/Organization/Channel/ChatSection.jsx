"use client";
import Chat from "@/components/Chat/Chat";
import ChatInput from "@/components/Chat/ChatInput";
import ChatNavbar from "@/components/Chat/ChatNavbar";
import { channelProfileStore } from "@/store/channelProfileStore";
import classNames from "classnames";
import React, { useState } from "react";

function ChatSection() {
  const [messages, setMessages] = useState([]);
  return (
    <div className={classNames(`flex-1  md:flex flex-col transition h-screen`)}>
      <ChatNavbar />
      <Chat setMessages={setMessages} messages={messages} />
      <ChatInput setMessages={setMessages} />
    </div>
  );
}

export default ChatSection;
