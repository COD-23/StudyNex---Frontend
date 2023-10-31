import React from "react";

const RightContainer = ({ children }) => {
  return (
    <div className="absolute right-0 w-full lg:w-1/4 bg-gray-300 h-screen z-50">
      {children}
    </div>
  );
};

export default RightContainer;
