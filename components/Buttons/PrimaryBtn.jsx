import classNames from "classnames";
import Link from "next/link";
import React from "react";

const PrimaryBtn = ({ children, label, invert, box, link="" }) => {
  return (
    <Link
      href={link}
      className={classNames(
        "lg:px-6 px-4 py-3 z-50 lg:cursor-pointer font-bold uppercase  flex flex-row justify-center items-center  shadow-xl",
        invert ? "bg-white text-violet-800" : "gradient-transition text-white",
        !box && "rounded-full"
      )}
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
    </Link>
  );
};

export default PrimaryBtn;
