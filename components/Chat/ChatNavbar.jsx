import Image from "next/image";
import React from "react";
import { QuizLogo } from "../Constants/imageContants";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const ChatNavbar = () => {
  return (
    <div className="w-full bg-white flex px-4 py-3 justify-between items-center z-50 shadow-sm">
      <div className="flex gap-3 items-center">
        <Image src={QuizLogo} alt="" className="w-12 h-12 rounded-full" />
        <div>
          <p>Testing Channel 1</p>
          <p className="text-gray-500 text-xs line-clamp-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit consequatur beatae, quod, accusamus iste architecto maiores quia atque officiis sit modi ullam vitae ipsam dignissimos hic ad? Quas consequuntur aut esse quidem unde maxime consequatur beatae, nostrum, ducimus quasi officiis.</p>
        </div>
      </div>
      <div className="flex gap-3 text-2xl">
        <IoCallOutline className="cursor-pointer"/>
        <IoVideocamOutline className="cursor-pointer"/>
        <BiDotsHorizontalRounded className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default ChatNavbar;
