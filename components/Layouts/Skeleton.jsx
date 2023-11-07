import React from "react";

export const ChannelListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-2 ">
        <div className="h-16 bg-gray-400 animate-pulse"></div>
        <div className="h-16 bg-gray-400 animate-pulse"></div>
        <div className="h-16 bg-gray-400 animate-pulse"></div>
        <div className="h-16 bg-gray-400 animate-pulse"></div>
    </div>
  );
};
