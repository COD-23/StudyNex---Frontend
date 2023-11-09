import { AnimatePresence,motion } from 'framer-motion';
import React from 'react'
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { MdOutlineLogout } from 'react-icons/md';

const MenuPopup = ({showMenu,setPopup,setShowMenu}) => {
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
          className="absolute right-[-10rem] -top-24 grid gap-2 w-fit h-fit p-2 bg-white border border-gray-100 shadow-lg"
        >
          <div
            className="flex items-center gap-4 lg:cursor-pointer hover:bg-gray-100 px-2 py-2 transition-all"
            onClick={() => {
              setPopup("create");
              setShowMenu(false);
              window.history.pushState("#", null, null);
            }}
          >
            <FaPlus className="w-4 h-4" />
            <p className="">Create Channel</p>
          </div>
          <div
            className="flex items-center gap-4 lg:cursor-pointer hover:bg-gray-100 px-2 py-2 transition-all"
            onClick={() => {
              setPopup("join");
              setShowMenu(false);
              window.history.pushState("#", null, null);
            }}
          >
            <AiOutlineUsergroupAdd className="w-4 h-4" />
            <p className="">Join Channel</p>
          </div>
          <div
            className="flex items-center gap-4 lg:cursor-pointer hover:bg-gray-100 px-2 py-2 text-red-500 transition-all"
            onClick={() => setPopup("join")}
          >
            <MdOutlineLogout className=" w-6 h-6" />
            <p className="">Leave Organization</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MenuPopup