import Image from "next/image";
import React from "react";
import { StudentLogo } from "../Constants/imageContants";
import classNames from "classnames";

const Message = ({ data }) => {
  return (
    <div>
      <div
        className={classNames(
          `flex gap-1`,
          data?.type !== "sender" && "justify-end"
        )}
      >
        <div className="max-w-[60%]">
          <div className={`flex gap-3 ${data?.type !== "sender" && "justify-end"}`}>
            {data?.type === "sender" && (
              <p className="text-xs mb-2">{data?.name}
              </p>
            )}
            <p className="text-xs mb-2">19:47</p>
          </div>
          <p
            className={classNames(
              data?.type === "sender"
                ? "bg-nack rounded-r-2xl rounded-bl-2xl"
                : "bg-[#95A4FC] text-white rounded-l-2xl rounded-br-2xl",
              `text-sm px-4 py-3 w-fit`
            )}
          >
            {data?.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
