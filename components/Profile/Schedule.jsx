import React from 'react'
import { MdDateRange } from "react-icons/md";

const Schedule = () => {
  return (
    <div className='bg-gray-100 h-full w-full rounded-lg flex flex-col justify-around lg:px-10 px-5 lg:text-lg text-sm font-bold'>
      <div className='flex flex-1 flex-col border-b-2 border-gray-400 pt-5'>
        <p className='text-center'>Recent<span className='text-blue-500 ml-2'>Activities</span></p>
        <div className='mb-4 mt-2 border-b-2 border-gray-300'>
          <p className='text-blue-500'>Attended Quiz - <span className='text-black'>Community of Coders Web Developement</span></p>
          <p className='text-sm text-gray-500'><MdDateRange className='inline'/>24/11/2023</p>
        </div>
        <div>
          <p className='text-blue-500'>Attended Seminar - <span className='text-black'>GDSC Web Workshop</span></p>
          <p className='text-sm text-gray-500'><MdDateRange className='inline'/>24/11/2023</p>
        </div>
      </div>
      <div className='flex flex-1 flex-col pt-5'>
        <p className='text-center'>Upcoming<span className='text-blue-500 ml-2'>Activities</span></p>
        <div className='mb-5 mt-2 border-b-2 border-gray-300'>
          <p className='text-blue-500'>Scheduled Quiz - <span className='text-black'>Community of Coders Web Developement</span></p>
          <p className='text-sm text-gray-500'><MdDateRange className='inline'/>24/11/2023</p>
        </div>
        <div>
          <p className='text-blue-500'>Scheduled Seminar - <span className='text-black'>Community of Coders Web Developement</span></p>
          <p className='text-sm text-gray-500'><MdDateRange className='inline'/>24/11/2023</p>
        </div>
      </div>
    </div>
  )
}

export default Schedule