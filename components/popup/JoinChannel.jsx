import React, { useMemo } from "react";
import PopupContainer from "../Layouts/PopupContainer";
import Title from "../Helpers/Title";
import Description from "../Helpers/Description";
import PrimaryBtn from "../Helpers/PrimaryBtn";
import { nameInitials } from "@/helperFunctions/nameInitials";
import { BsSearch } from "react-icons/bs";

const JoinChannel = ({ orgDetails, setPopup }) => {
    const channelUsers = useMemo(() => [
      {
        name: "Pradnya",
        Description:
          "djjdkjkdk djdkj dkjkdj kdieuoieiori ori oiroioiroiroioriorioiroioiroiroioriorioiroioiroiroioriorioiroioiroiroioriori",
      },
      {
        name: "Test User",
        Description:
          "djjdkjkdk djdkj dkjkdj kdieuoieiori ori oiroioiroiroioriorioiroioiroiroioriori",
        isAdmin: true,
      },
      {
        name: "Aaditya User",
        Description:
          "djjdkjkdk djdkj dkjkdj kdieuoieiori ori oiroioiroiroioriorioiroioiroiroioriori",
      },
      {
        name: "Test User",
        Description:
          "djjdkjkdk djdkj dkjkdj kdieuoieiori ori oiroioiroiroiorioiroioiroiroiorioriori",
      },
      {
        name: "Vinit User",
        Description:
          "djjdkjkdk djdkj dkjkdj kdieuoieiori ori oiroioiroiroioriorioiroioiroiroioriorioiroioiroiroioriori",
      },
      {
        name: "Test User",
        Description:
          "djjdkjkdk djdkj dkjkdj kdieuoieiori ori oiroioiroiroioriorioiroioiroiroioriorioiroioiroiroioriori",
      },
      {
        name: "Test User",
        Description:
          "djjdkjkdk djdkj dkjkdj kdieuoieiori ori oiroioiroiroioriorioiroioiroiroioriorioiroioiroiroioriori",
      },
      {
        name: "Test User",
        Description:
          "djjdkjkdk djdkj dkjkdj kdieuoieiori ori oiroioiroiroioriorioiroioiroiroioriorioiroioiroiroioriori",
      },
      {
        name: "Test User",
        Description:
          "djjdkjkdk djdkj dkjkdj kdieuoieiori ori oiroioiroiroioriorioiroioiroiroioriorioiroioiroiroioriori",
      },
      {
        name: "Test User",
        Description:
          "djjdkjkdk djdkj dkjkdj kdieuoieiori ori oiroioiroiroioriorioiroioiroiroioriorioiroioiroiroioriori",
      },
    ]);
  return (
    <PopupContainer setPopup={setPopup} closeBtn>
      <div className="bg-white w-[90vw] md:w-[30vw] h-[70vh] rounded-md shadow-md py-6 lg:px-10 px-4 flex flex-col gap-3">
        <Title>Join Channel</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          veritatis! Asperiores id possimus provident.
        </Description>
        <div class="relative h-12 w-full">
          <input
            class="peer h-12 w-full rounded-[7px] border border-blue-gray-200 border-t bg-transparent px-3 py-2.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          />
          <label class="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-base peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Search Channel
          </label>
          <BsSearch className="h-5 w-5 absolute right-2 top-[10px] text-gray-500" />
        </div>
        <div className="overflow-scroll scrollbar-none mb-4">
          {channelUsers.map((item, index) => {
            return (
              <div key={index} className="flex flex-col relative ">
                <div className="hover:bg-gray-100 cursor-pointer p-3">
                  <p className=""># {item.name}</p>
                  <p className="text-sm text-gray-500 truncate">{item.Description}</p>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </PopupContainer>
  );
};

export default JoinChannel;
