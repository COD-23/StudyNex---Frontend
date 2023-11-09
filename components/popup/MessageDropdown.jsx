import { AnimatePresence, motion } from "framer-motion";
import React from 'react'

const MessageDropdown = ({showMenu}) => {
  return (
    <AnimatePresence>
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
          className="absolute left-[50px] grid gap-2 w-fit h-fit p-2 bg-white border border-gray-100 shadow-lg text-sm rounded-md"
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
    </AnimatePresence>
  );
}

export default MessageDropdown