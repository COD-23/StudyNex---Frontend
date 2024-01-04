import React, { useState } from "react";
import classNames from "classnames";
import ImageViewer from "react-simple-image-viewer";
import MessageDropdown from "../popup/MessageDropdown";
import { nameInitials } from "@/helperFunctions/nameInitials";
import { userDetailsStore } from "@/store/userStore";
import { isEmpty } from "lodash";
import "video-react/dist/video-react.css";
import { Player } from "video-react";

const Message = ({ data }) => {
  const userDetails = userDetailsStore((state) => state.userDetails);
  const isSender = data?.sender?._id === userDetails?._id;
  const justifyClass = isSender ? "justify-end" : "";
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`flex gap-1 ${justifyClass}`}>
      <div className="lg:max-w-[60%] max-w-[80%]">
        {/* message and images */}
        <p
          className={classNames(
            isSender
              ? "bg-nack border rounded-l-2xl rounded-br-2xl "
              : "bg-white border rounded-r-2xl rounded-bl-2xl",
            "text-sm px-4 py-2 shadow-sm w-fit "
          )}
        >
          {/* time and name */}
          <div
            className={`flex items-center justify-between pb-2 gap-4 ${justifyClass}`}
          >
            {!isSender && (
              <>
                <div className="flex gap-2 items-center">
                  <div className="gradient-transition text-white font-semibold w-5 h-5  rounded-full">
                    <p className="text-center text-sm">
                      {nameInitials(data?.sender?.name)}
                    </p>
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
          {!isEmpty(data?.mediaContent) &&
            (data?.type === "Image" ? (
              <img
                src={data?.mediaContent}
                alt=""
                className="md:max-w-[400px] md:max-w-[300px] rounded-md mb-2 cursor-pointer"
                onClick={() => setIsViewerOpen(true)}
              />
            ) : data?.type === "Video" ? (
              <Player
                fluid={false}
                src={data?.mediaContent}
                aspectRatio="3:2"
              />
            ) : data?.type === "Document" ? (
              <p>ccjeskbdcjsdg</p>
            ) : null)}
          {data?.content?.length > 15 ? (
            <>
              <p className="break-all">{data?.content}</p>
              <p className="text-[8px] flex justify-end ">19:47</p>
            </>
          ) : (
            <div className="flex gap-3">
              <p className="break-all">{data?.content}</p>
              <p className="text-[8px] flex-1 text-end pt-1">19:47</p>
            </div>
          )}
        </p>
      </div>

      {isViewerOpen && (
        <ImageViewer
          src={[data?.mediaContent]}
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
