
"use client"
import React, { useState } from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineLeaderboard, MdOutlineRecentActors } from 'react-icons/md'
import { GiProgression } from 'react-icons/gi'
import { TbLogout } from 'react-icons/tb'
import { motion } from "framer-motion";
import Info from './Info'
import LeadInfo from './LeadInfo'
import Schedule from './Schedule'
import Progressbar from './Progressbar'
import Image from 'next/image'
import { Defaultpic } from '../Constants/imageContants'
import Logout from './Logout'



const Profile = () => {

  const [active, setActive] = useState("Info");

  return (
    <div className='flex flex-col'>
      <div className='flex-[2]'>
        <div className="border-4 border-slate-950 bg-cover bg-left bg-[url('../public/Assets/Images/profilebg.jpg')] h-52 w-full px-20 pt-24 lg:px-52 xl:py-28 rounded-b-xl flex">
        <div className="border-2 border-slate-950 w-48 h-48 flex rounded-full">
          <Image src={Defaultpic} alt="Default Pic" width={0} height={0} className='w-full h-full rounded-full object-cover'/></div>
          <div className='hidden md:h-16 md:w-80 md:bg-gradient-to-r from-blue-400 to-violet-600 md:rounded-lg md:my-20 md:ml-24 md:flex md:justify-center md:items-center md:shadow-2xl'>
            <p className='text-2xl font-extrabold font-sans  text-white'>Your zation</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row lg:py-24 py-32 lg:mx-40'>
        <div className='flex lg:flex-col flex-row lg:h-96 h-20 lg:pt-2 lg:justify-around mx-5 lg:items-start lg:mx-16 lg:border-r-gray-400 gap-10 lg:border-r-2 overflow-x-scroll lg:overflow-hidden' >
          <p className='hidden lg:font-bold lg:text-blue-500 lg:flex lg:h-10 lg:w-48 lg:justify-start lg:items-center lg:text-2xl lg:mb-5'><span className='text-black mr-2'>Hey </span> Krystal!!</p>
          <motion.div whileHover={{ scale: 1.1 }} 
          className='hover:text-white hover:bg-gradient-to-r from-blue-400 to-violet-600 h-10 flex lg:pl-3 justify-center lg:justify-start flex-row items-center lg:rounded-r-3xl lg:rounded-l-none rounded-r-3xl gap-1 rounded-l-3xl cursor-pointer'
          onClick={() => setActive("Info")}>
          <BsInfoCircle className='' /><p className='font-semibold'>Your Info</p>
          </motion.div>
          <hr className="hidden lg:bg-gray-400 lg:h-[3px] lg:w-60" />
          <motion.div whileHover={{ scale: 1.1 }}
          className='hover:text-white hover:bg-gradient-to-r from-blue-400 to-violet-600 h-10 w-48 flex gap-1 lg:pl-3 justify-center lg:justify-start items-center lg:rounded-r-3xl lg:rounded-l-none rounded-r-3xl rounded-l-3xl cursor-pointer'
          onClick={() => setActive("Schedule")}>
          <MdOutlineRecentActors className='' /> <p className='font-semibold'>Schedule</p>
          </motion.div>
          <hr className=" hidden lg:bg-gray-400 lg:h-[3px] lg:w-60" />
          <motion.div whileHover={{ scale: 1.1 }} 
          className='hover:text-white hover:bg-gradient-to-r from-blue-400 to-violet-600 h-10 w-48 flex gap-1 lg:pl-3 justify-center lg:justify-start items-center lg:rounded-r-3xl lg:rounded-l-none rounded-r-3xl rounded-l-3xl cursor-pointer' 
          onClick={() => setActive("Progressbar")}>
          <GiProgression className='' /> <p className='font-semibold'>Progress Report</p>
          </motion.div>
          <hr className=" hidden lg:bg-gray-400 lg:h-[3px] lg:w-60" />
          <motion.div whileHover={{ scale: 1.1 }} 
          className='hover:text-white hover:bg-gradient-to-r from-blue-400 to-violet-600 h-10 w-48 flex lg:pl-3 justify-center lg:justify-start items-center lg:rounded-r-3xl lg:rounded-l-none rounded-r-3xl rounded-l-3xl cursor-pointer'
          onClick={() => setActive("LeaderInfo")}>
          <MdOutlineLeaderboard className='' /> <p className='font-semibold'>Leader Board</p>
          </motion.div>
          <hr className=" hidden lg:bg-gray-400 lg:h-[3px] lg:w-60" />
          <motion.div whileHover={{ scale: 1.1 }} 
          className='hover:text-white hover:bg-gradient-to-r from-blue-400 to-violet-600 h-10 w-48 flex lg:pl-3 justify-center lg:justify-start items-center lg:rounded-r-3xl lg:rounded-l-none rounded-r-3xl rounded-l-3xl cursor-pointer'
          onClick={() => setActive("Logout")}>
          <TbLogout className='' /> <p className='font-semibold'>Logout</p>
          </motion.div>

        </div>
        <div
          className='flex h-96 w-4/5 mx-9 lg:ml-4 lg:mr-20 rounded-lg'>
          {active === "Info" && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              className='h-full w-full'><Info /></motion.div>
          )}
          {active === "LeaderInfo" && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              className='h-full w-full'><LeadInfo /></motion.div>
          )}
          {active === "Schedule" && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              className='h-full w-full'><Schedule /></motion.div>
          )}
          {active === "Progressbar" && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              className='h-full w-full'><Progressbar /></motion.div>
          )}
          {active === "Logout" && (
            <motion.div
              className='h-full w-full'><Logout/></motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile