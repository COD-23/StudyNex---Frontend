"use client";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { orgStore } from "@/store/orgStore";
import CreateChannel from "../popup/CreateChannel";
import JoinChannel from "../popup/JoinChannel";
import { isEmpty } from "lodash";
import { userDetailsStore } from "@/store/userStore";
import RightContainer from './RightContainer'

const ParentContainer = ({ children, orgData, channelsData }) => {
  const setOrgDetails = orgStore((state) => state.setOrgDetails);
  const userDetails = userDetailsStore((state) => state.userDetails);
  const getUserDetails = userDetailsStore((state) => state.getUserDetails);
  const [activeTab, setActiveTab] = useState("General");

  useEffect(() => {
    if (isEmpty(userDetails)) getUserDetails();
  }, [userDetails]);

  const [popup, setPopup] = useState("");
  setOrgDetails(orgData.data);
  return (
    <div className="grid lg:grid-cols-[280px,1fr] mx-auto bg-[#e9f8f5] overflow-hidden">
      <SideBar
        channelsData={channelsData}
        setPopup={setPopup}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      {popup == "create" && (
        <CreateChannel
          orgDetails={orgData.data}
          channelsData={channelsData}
          setPopup={setPopup}
          setActiveTab={setActiveTab}
        />
      )}
      {popup == "join" && (
        <JoinChannel
          orgDetails={orgData.data}
          channelsData={channelsData}
          setPopup={setPopup}
          setActiveTab={setActiveTab}
        />
      )}
      {children}
      <RightContainer/>
    </div>
  );
};

export default ParentContainer;
