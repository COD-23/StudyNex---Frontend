import classNames from "classnames";
import React from "react";

const PrimaryBtn = ({ children, label, invert }) => {
  return (
    <div
      className="md:px-8 px-2 py-2 mt-4 z-50 md:cursor-pointer font-bold uppercase  rounded-full  flex flex-row  m-auto justify-center items-center gradient-transition text-white"
    >
      <p>{label}</p>
      {children}
      {!invert && (
        <div className="flex gap-1 justify-center items-center">
          <span className="bg-white rounded-full inline-block ml-2 w-[6px] h-[6px]" />
          <span className="bg-white rounded-full  opacity-50 inline-block w-[6px] h-[6px]" />
          <span className="bg-white rounded-full  opacity-20 inline-block w-[6px] h-[6px]" />
        </div>
      )}
    </div>
  );
};

export default PrimaryBtn;
