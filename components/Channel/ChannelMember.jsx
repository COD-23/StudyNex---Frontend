import { nameInitials } from "@/helperFunctions/nameInitials";
import React from "react";

const ChannelMember = ({ data }) => {
  return (
    <div className="flex gap-4 py-2 datas-center relative">
      <div className="bg-nack px-3 py-1 rounded-full shadow-md">
        <p className=" text-center">{nameInitials(data?.username)}</p>
      </div>
      <p className="text-sm">{data?.username}</p>
      {data?.is_admin && (
        <div className="p-1 rounded-md bg-nack absolute right-4 ">
          <p className="text-xs italic ">Admin</p>
        </div>
      )}
    </div>
  );
};

export default ChannelMember;
