import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";

const MediaPopup = ({ mediaPicker, setMediaPicker }) => {
  return (
    <AnimatePresence>
      {mediaPicker && (
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0 }}
          animate={{ opacity: 1, y: -100, scale: 1 }}
          exit={{
            opacity: 0,
            y: 0,
            scale: 0,
            type: "spring",
          }}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          className="absolute  -top-[85px] -left-14 grid gap-2 w-fit h-fit p-2 bg-white border border-gray-100 shadow-lg"
        >
          <div className="flex gap-4 relative hover:bg-gray-200 rounded-xl">
            <input type="file" id="documents" className="hidden absolute" />
            <label
              htmlFor="documents"
              className="flex gap-2 p-2 lg:cursor-pointer"
            >
              <IoDocumentText className="h-5 w-5" />
              <p className="text-sm">Documents</p>
            </label>
          </div>

          <div className="flex gap-4 relative hover:bg-gray-200 rounded-xl">
            <input type="file" id="photos" className="hidden absolute" />
            <label
              htmlFor="photos"
              className="flex gap-2 p-2 lg:cursor-pointer"
            >
              <IoMdPhotos className="h-5 w-5" />
              <p className="text-sm">Photos</p>
            </label>
          </div>

          <div className="flex gap-4 relative hover:bg-gray-200 rounded-xl">
            <input type="file" id="videos" className="hidden absolute" />
            <label
              htmlFor="videos"
              className="flex gap-2 p-2 lg:cursor-pointer"
            >
              <BiSolidMoviePlay className="h-5 w-5" />
              <p className="text-sm">Videos</p>
            </label>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MediaPopup;
