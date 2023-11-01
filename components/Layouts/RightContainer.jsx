import React from "react";

const RightContainer = ({ children }) => {
  return (
    <div className="absolute right-0 w-full lg:w-[20%] bg-[#e9f8f5] h-screen z-50">
      {children}
    </div>
  );
};

export default RightContainer;
