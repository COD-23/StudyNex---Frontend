"use client";
import React from 'react'
import { MainLabel } from '../Constants/labelConstant';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import LottieComponent from './Lottie';
import { FcApproval } from "react-icons/fc";


const CreateJoin = () => {
  return (
    <div className="bg-cover bg-center h-screen
                    bg-login                    
                    xl:bg-[url('../public/Assets/Images/createbg.jpeg')] flex flex-col justify-center items-center xl:bg-no-repeat">
      <p className='font-bold text-4xl mt-16 py-7 px-7 text-center bg-gradient-to-r from-blue-400 to-violet-600 text-transparent bg-clip-text'>{MainLabel}</p>
      <div className='lg:w-1/4 lg:m-auto w-2/3 m-auto lg:mb-5 mb-6 '>
        <LottieComponent />
      </div>
      <div className='flex lg:flex-row flex-col lg:gap-10 gap-3'>
        <div className='max-w-sm mx-auto bg-gradient-to-r from-blue-400 to-violet-600 rounded-md overflow-hidden shadow-2xl flex flex-col items-center mb-10'>
          <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-4 text-white">Create Organization</div>
            <p className="text-white mb-5"><FcApproval style={{ display: 'inline' }} />This is a sample card in Tailwind CSS.</p>
            <p className="text-white mb-5"><FcApproval style={{ display: 'inline' }} />This is a sample card in Tailwind CSS.</p>
            <p className="text-white mb-5"><FcApproval style={{ display: 'inline' }} />This is a sample card in Tailwind CSS.</p>
            <p className="text-white mb-5"><FcApproval style={{ display: 'inline' }} />This is a sample card in Tailwind CSS.</p>
            <p className="text-white "><FcApproval style={{ display: 'inline' }} />This is a sample card in Tailwind CSS.</p>
          </div>
          <PrimaryBtn label="Create Organization" link='' className='mb-4' invert />
        </div>
        <div className='max-w-sm mx-auto bg-gradient-to-r from-violet-600 to-blue-400 rounded-md overflow-hidden shadow-2xl flex flex-col items-center mb-10'>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-4 text-white">Join Organization</div>
            <p className="text-white mb-5"><FcApproval style={{ display: 'inline' }} />This is a sample card in Tailwind CSS.</p>
            <p className="text-white mb-5"><FcApproval style={{ display: 'inline' }} />This is a sample card in Tailwind CSS.</p>
            <p className="text-white mb-5"><FcApproval style={{ display: 'inline' }} />This is a sample card in Tailwind CSS.</p>
            <p className="text-white mb-5"><FcApproval style={{ display: 'inline' }} />This is a sample card in Tailwind CSS.</p>
            <p className="text-white "><FcApproval style={{ display: 'inline' }} />This is a sample card in Tailwind CSS.</p>
          </div>
          <PrimaryBtn label="Join Organization" link='' className='mb-4' invert />
        </div>

      </div>

    </div>
  )
}

export default CreateJoin