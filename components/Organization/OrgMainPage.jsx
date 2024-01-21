"use client"
import { activeOrgChannel } from "@/store/activeOrgChannel";
import React from "react";
import ChatSection from "./Channel/ChatSection";
import LeaderTable from "../LeaderBoard/LeaderTable";

const OrgMainPage = () => {
  const orgActiveChannel = activeOrgChannel((state) => state.orgChannel);
  console.log(orgActiveChannel);
  return (
    <div className="flex-1  md:flex flex-col transition h-screen">
      {orgActiveChannel === "Leaderboard" ? <LeaderTable /> : <ChatSection />}
    </div>
  );
};

export default OrgMainPage;
