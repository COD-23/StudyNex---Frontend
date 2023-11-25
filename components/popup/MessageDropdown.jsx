import { AnimatePresence, motion } from "framer-motion";
import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";

const MessageDropdown = ({ showMenu, setIsMenuOpen }) => {
  return (
    <div className="relative">
      <div className="flex items-center">
        <button onClick={() => setIsMenuOpen(!showMenu)}>
          <BiDotsVerticalRounded className="cursor-pointer" />
        </button>
      </div>
      {showMenu && (
        <motion.div
          initial={{ opacity: 0, x: 0, scale: 0 }}
          animate={{ opacity: 1, x: 100, scale: 1 }}
          exit={{
            opacity: 0,
            x: 0,
            scale: 0,
            type: "spring",
          }}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          className="absolute top-0 right-0 grid gap-2 origin-top-right w-fit h-fit p-2 bg-white border border-gray-100 shadow-lg text-sm rounded-md"
        >
          <div
            className="flex items-center gap-4 lg:cursor-pointer hover:bg-gray-100 px-2 py-2 transition-all"
            onClick={() => {
              setPopup("create");
              setShowMenu(false);
              window.history.pushState("#", null, null);
            }}
          >
            <p className="">Reply</p>
          </div>
          <div
            className="flex items-center gap-4 lg:cursor-pointer hover:bg-gray-100 px-2 py-2 transition-all"
            onClick={() => {
              setPopup("join");
              setShowMenu(false);
              window.history.pushState("#", null, null);
            }}
          >
            <p className="">Delete message</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MessageDropdown