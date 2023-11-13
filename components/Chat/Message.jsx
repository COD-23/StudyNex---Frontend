import React, { useState } from "react";
import classNames from "classnames";
import ImageViewer from "react-simple-image-viewer";
import { BiDotsVerticalRounded } from "react-icons/bi";
import MessageDropdown from "../popup/MessageDropdown";

//blue-500 -blue
//05716c - green
//3C84AB

const Message = ({ data }) => {
  const isSender = data?.type === "sender";
  const justifyClass = isSender ? "" : "justify-end";
  const isImage = data?.msg_type === "image";
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`flex gap-1 ${justifyClass}`}>
      <div className="lg:max-w-[60%] max-w-[80%]">
        {/* time and name */}
        <div className={`flex gap-3 ${justifyClass}`}>
          {isSender && (
            <>
              <p className="text-xs mb-2">{data?.name}</p>
              <MessageDropdown
                showMenu={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
            </>
          )}
        </div>
        {/* message and images */}
        <p
          className={classNames(
            isSender
              ? "bg-white border rounded-r-2xl rounded-bl-2xl"
              : "bg-nack border rounded-l-2xl rounded-br-2xl",
            "text-sm px-4 py-3 shadow-sm w-fit"
          )}
        >
          {isImage && (
            <img
              src={data?.link}
              alt=""
              className="max-w-[300px] rounded-md mb-2 cursor-pointer"
              onClick={() => setIsViewerOpen(true)}
            />
          )}
          {data?.message.length > 15 ? (
            <>
              {data?.message}
              <p className="text-[8px] flex justify-end">19:47</p>
            </>
          ) : (
            <div className="flex gap-3">
              {data?.message}
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
