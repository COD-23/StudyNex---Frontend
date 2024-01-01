import React, { useState } from "react";
import classNames from "classnames";
import ImageViewer from "react-simple-image-viewer";
import { BiDotsVerticalRounded } from "react-icons/bi";
import MessageDropdown from "../popup/MessageDropdown";
import { nameInitials } from "@/helperFunctions/nameInitials";
import { userDetailsStore } from "@/store/userStore";

//blue-500 -blue
//05716c - green
//3C84AB

const Message = ({ data }) => {
  const userDetails = userDetailsStore((state) => state.userDetails);
  const isSender = data?._id === userDetails?._id;
  const justifyClass = isSender ? "" : "justify-end";
  const isImage = data?.type === "image";
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className={`flex gap-1 ${justifyClass}`}>
      <div className="lg:max-w-[60%] max-w-[80%]">
        {/* message and images */}
        <p
          className={classNames(
            isSender
              ? "bg-white border rounded-r-2xl rounded-bl-2xl"
              : "bg-nack border rounded-l-2xl rounded-br-2xl",
            "text-sm px-4 py-3 shadow-sm w-fit"
          )}
        >
          {/* time and name */}
          <div className={`flex items-center justify-between pb-2 gap-4 ${justifyClass}`}>
            {isSender && (
              <>
              <div className="flex gap-2 items-center">
                <div className="gradient-transition text-white font-semibold w-5 h-5  rounded-full">
                  <p className="text-center">{nameInitials(data?.name)}</p>
                </div>
                <p className="text-xs  font-semibold text-gray-700 ">
                  {data?.sender?.name}
                </p>
              </div>
                <MessageDropdown
                  showMenu={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
              </>
            )}
          </div>
          {isImage && (
            <img
              src={data?.link}
              alt=""
              className="max-w-[300px] rounded-md mb-2 cursor-pointer"
              onClick={() => setIsViewerOpen(true)}
            />
          )}
          {data?.content?.length > 15 ? (
            <>
              {data?.content}
              <p className="text-[8px] flex justify-end">19:47</p>
            </>
          ) : (
            <div className="flex gap-3">
              {data?.content}
              <p className="text-[8px] flex-1 text-end">19:47</p>
            </div>
          )}
        </p>
      </div>

      {isViewerOpen && (
        <ImageViewer
          src={[data?.link]}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={() => setIsViewerOpen(false)}
          backgroundStyle={{
            zIndex: "999",
            backdropFilter: "blur(2px)",
            background: "rgb(0,0,0,0.7)",
          }}
        />
      )}
    </div>
  );
};

export default Message;
