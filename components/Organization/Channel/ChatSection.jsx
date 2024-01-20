"use client";
import Chat from "@/components/Chat/Chat";
import ChatInput from "@/components/Chat/ChatInput";
import ChatNavbar from "@/components/Chat/ChatNavbar";
import { channelProfileStore } from "@/store/channelProfileStore";
import { channelStore } from "@/store/channelStore";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

function ChatSection() {
  const isActiveMobile = channelStore((state) => state.isActiveMobile);
  const setActiveMobile = channelStore((state) => state.setActiveMobile);
  const showChannelProfile = channelProfileStore(
    (state) => state.showChannelProfile
  );
  const [show, setShow] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (isMobile) {
      const handlePopState = function () {
        setActiveMobile(false);
      };
      window.addEventListener("popstate", handlePopState);
      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, []);

  useEffect(() => {
    if (showChannelProfile) {
      setShow("md:flex hidden");
    } else if (isActiveMobile) {
      setShow("flex");
    } else {
      setShow("md:flex hidden");
    }
  }, [showChannelProfile, isActiveMobile]);

  return (
    <div
      className={classNames(
        show,
        `flex-1  md:flex flex-col transition h-screen`
      )}
    >
      <ChatNavbar />
      <Chat setMessages={setMessages} messages={messages} />
      <ChatInput setMessages={setMessages} />
    </div>
  );
}

export default ChatSection;
