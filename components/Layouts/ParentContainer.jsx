"use client";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { orgStore } from "@/store/orgStore";
import CreateChannel from "../popup/CreateChannel";
import JoinChannel from "../popup/JoinChannel";
import { isEmpty } from "lodash";
import { userDetailsStore } from "@/store/userStore";

const ParentContainer = ({ children, orgData, channelsData }) => {
  const setOrgDetails = orgStore((state) => state.setOrgDetails);
  const userDetails = userDetailsStore((state) => state.userDetails);
  const getUserDetails = userDetailsStore((state) => state.getUserDetails);

  useEffect(()=>{
    if(isEmpty(userDetails)) getUserDetails();
  },[userDetails])

  const [popup, setPopup] = useState("");
  setOrgDetails(orgData.data);
  return (
    <div className="flex mx-auto bg-[#e9f8f5] overflow-hidden">
      <SideBar channelsData={channelsData} setPopup={setPopup} />
      {popup == "create" && (
        <CreateChannel
          orgDetails={orgData.data}
          channelsData={channelsData}
          setPopup={setPopup}
        />
      )}
      {popup == "join" && (
        <JoinChannel
          orgDetails={orgData.data}
          channelsData={channelsData}
          setPopup={setPopup}
        />
      )}
      {children}
    </div>
  );
};

export default ParentContainer;
