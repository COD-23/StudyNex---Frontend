import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import classNames from "classnames";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import { LuInfo } from "react-icons/lu";
import { channelProfileStore } from "@/store/channelProfileStore";
const ChannelMenuPopup = () => {
  const [active, setActive] = useState(false);
  const setShowChannelProfile = channelProfileStore(
    (state) => state.setShowChannelProfile
  );
  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center">
        <button onClick={() => setActive(!active)}>
          <BiDotsHorizontalRounded className="cursor-pointer" />
        </button>
      </div>

      <AnimatePresence>
        {active && (
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
          >
            <ul className="absolute top-2 right-[6rem] z-10 mt-2 w-[160px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <li>
                  <p
                    className={classNames(
                      "cursor-pointer text-gray-900 flex px-4 py-2 text-sm items-center gap-2 hover:bg-gray-100"
                    )}
                    onClick={() => {
                      setShowChannelProfile(true);
                      setActive(false);
                    }}
                  >
                    <LuInfo />
                    Channel info
                  </p>
                </li>
                <li>
                  <p
                    className={classNames(
                      "cursor-pointer text-gray-900 flex px-4 py-2 text-sm items-center gap-2 hover:bg-gray-100"
                    )}
                  >
                    <IoVideocamOutline className="text-lg" />
                    Start a meet
                  </p>
                </li>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChannelMenuPopup;
