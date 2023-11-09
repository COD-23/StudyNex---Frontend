"use client"
import Chat from "@/components/Chat/Chat";
import ChatInput from "@/components/Chat/ChatInput";
import ChatNavbar from "@/components/Chat/ChatNavbar";
import { channelProfileStore } from "@/store/channelProfileStore";
import classNames from "classnames";
import React from "react";

function ChatSection() {
  const showChannelProfile = channelProfileStore(
    (state) => state.showChannelProfile
  );
  return (
    <div className="flex-1 flex flex-col transition">
      <ChatNavbar/>
      <Chat/>
      <ChatInput/>
    </div>
  );
}

export default ChatSection;
