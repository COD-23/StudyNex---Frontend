"use client";
import React, { useEffect, useMemo, useState } from "react";
import RightContainer from "../../Layouts/RightContainer";
import Image from "next/image";
import { QuizLogo } from "../../Constants/imageContants";
import SecondaryBtn from "../../Helpers/SecondaryBtn";
import { BsSearch } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { channelProfileStore } from "@/store/channelProfileStore";
import { CgClose } from "react-icons/cg";
import { nameInitials } from "@/helperFunctions/nameInitials";
import { channelStore } from "@/store/channelStore";
import { format } from "date-fns";
import { isEmpty } from "lodash";
import { getRequest, getRequestv2 } from "@/config/axiosInterceptor";
import { getChannelMembers } from "@/components/Constants/apiEndpoints";
import { getCookie } from "cookies-next";
import axios from "axios";

const ChannelProfile = () => {
  const showChannelProfile = channelProfileStore(
    (state) => state.showChannelProfile
  );
  const setShowChannelProfile = channelProfileStore(
    (state) => state.setShowChannelProfile
  );
  const channelDetails = channelStore((state) => state.channelDetails);
  const [channelMembers, setChannelMembers] = useState([]);
  const token = getCookie("token");
  // console.log(channelDetails);
  let createdDate;
  if (!isEmpty(channelDetails)) {
    createdDate = format(
      new Date(channelDetails?.createdAt),
      "dd-MM-yyyy HH:mm aa"
    );
  }

  useEffect(() => {
    if (!isEmpty(channelDetails)) {
      const fetchChannelMembers = async () => {
        const body = {
          channelId: channelDetails?._id,
        };
        try {
          const response = await getRequestv2({
            url: getChannelMembers,
            body: body,
            token: token,
          });
          const data = response.data;
          console.log(data);
          if (response.status) {
            console.log(data);
            setChannelMembers((prev) => [...prev, data]);
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchChannelMembers();
    }
  }, [channelDetails]);

  useEffect(() => {
    console.log(channelMembers);
  }, [channelMembers]);

  // const channelUsers = useMemo(() => [
  //   {
  //     username: "Pradnya",
  //   },
  //   {
  //     username: "Test User",
  //     isAdmin: true,
  //   },
  //   {
  //     username: "Aaditya User",
  //   },
  //   {
  //     username: "Test User",
  //   },
  //   {
  //     username: "Vinit User",
  //   },
  //   {
  //     username: "Test User",
  //   },
  //   {
  //     username: "Test User",
  //   },
  //   {
  //     username: "Test User",
  //   },
  //   {
  //     username: "Test User",
  //   },
  //   {
  //     username: "Test User",
  //   },
  // ]);
  return (
    showChannelProfile && (
      <RightContainer>
        <div className="p-5 flex-1 grid place-content-center place-items-center gap-2 relative">
          <Image
            src={QuizLogo}
            className="w-24 h-24 rounded-full"
            alt="profile image"
          />
          <p className="font-semibold text-lg">{channelDetails.name}</p>
          <p className="text-sm text-gray-500">
            {channelDetails?.users?.length} participants
          </p>
          <CgClose
            className="w-6 h-6 absolute right-4 top-4 lg:cursor-pointer"
            onClick={() => setShowChannelProfile(false)}
          />
        </div>
        <hr className=" bg-white h-[2px] mx-4" />

        <div className="px-4 py-4 relative">
          <p className="text-sm text-gray-700 break-all line-clamp-3">
            {channelDetails?.description}
          </p>
          <p className="text-gray-600 text-xs mt-2 italic">
            Channel created by {channelDetails?.admin_id?.name}, on{" "}
            {createdDate}
          </p>
        </div>
        <hr className=" bg-white h-[2px] mx-4" />

        <div className="flex flex-col py-2 h-[calc(100vh-55vh)] lg:h-[calc(100vh-60vh)] relative">
          <div className="rounded-full w-full relative p-4 z-50">
            <input
              type="text"
              className="h-10 w-full text-gray-600 outline-none border border-gray-200 rounded-xl shadow-sm p-4 pr-12 placeholder:text-sm"
              placeholder="Search participants"
            />
            <BsSearch className="h-6 w-6 absolute right-8 top-6 text-gray-500" />
          </div>
          <div className="p-4 overflow-scroll scrollbar-none ">
            {channelDetails?.user?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-4 py-2 items-center relative"
                >
                  <div className="bg-nack px-3 py-1 rounded-full shadow-md">
                    <p className=" text-center">
                      {nameInitials(item.username)}
                    </p>
                  </div>
                  <p className="text-sm">{item.username}</p>
                  {item.isAdmin && (
                    <div className="p-1 rounded-md bg-nack absolute right-4 ">
                      <p className="text-xs italic ">Admin</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <hr className=" bg-white h-[2px] mx-4" />

        <div className="text-sm">
          <div className="flex items-center gap-4 lg:cursor-pointer p-4">
            <MdOutlineLogout className="text-red-600 w-5 h-5" />
            <p className="text-red-600">Leave Channel</p>
          </div>
          <div className="flex items-center gap-4 lg:cursor-pointer p-4">
            <MdOutlineLogout className="text-red-600 w-5 h-5" />
            <p className="text-red-600">Leave Organization</p>
          </div>
        </div>
      </RightContainer>
    )
  );
};

export default ChannelProfile;
