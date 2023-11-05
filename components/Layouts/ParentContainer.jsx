"use client";
import React from "react";
import SideBar from "./SideBar";
import { orgStore } from "@/store/orgStore";

const ParentContainer = ({ children, orgData, channelsData }) => {
  const setOrgDetails = orgStore((state) => state.setOrgDetails);
  setOrgDetails(orgData.data);
  return (
    <div className="grid lg:grid-cols-[280px,1fr] gap-10 mx-auto bg-[#e9f8f5]">
      <SideBar channelsData={channelsData}/>
      {children}
    </div>
  );
};

export default ParentContainer;
