"use client";
import React, { useState } from "react";
import SideBar from "./SideBar";
import { orgStore } from "@/store/orgStore";
import CreateChannel from "../popup/CreateChannel";

const ParentContainer = ({ children, orgData, channelsData }) => {
  const setOrgDetails = orgStore((state) => state.setOrgDetails);
  const [popup, setPopup] = useState("");
  setOrgDetails(orgData.data);
  return (
    <div className="grid lg:grid-cols-[280px,1fr] gap-10 mx-auto bg-[#e9f8f5]">
      <SideBar channelsData={channelsData} setPopup={setPopup}/>
      {children}
      {popup == "create" && (
        <CreateChannel
          orgDetails={orgData.data}
          setPopup={setPopup}
        />
      )
      }
    </div>
  );
};

export default ParentContainer;
