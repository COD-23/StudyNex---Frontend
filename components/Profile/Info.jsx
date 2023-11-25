import React from 'react'

const Info = () => {
  return (
    
    <div className='bg-gray-100 h-full w-full rounded-lg flex flex-col justify-around lg:px-10 px-5 lg:text-base font-bold'>
    <div className='flex flex-1 border-b-2 border-gray-300 items-center'>
      <div className='lg:w-1/5 w-1/2'>Name</div>
      <div className='text-blue-500 w-1/2'>Krystal Aniket Jadhav</div>
    </div>
    <div className='flex flex-1 border-b-2 border-gray-300 items-center'>
    <div className='lg:w-1/5 w-1/2'>Phone</div>
    <div className='text-blue-500 w-1/2'>+917021353070</div>
    </div>
    <div className="flex flex-1 border-b-2 border-gray-300 items-center">
      <div className='lg:w-1/5 w-1/2'>E-mail</div>
      <div className='text-blue-500 w-1/2 lg:text-lg text-sm break-all'>krystal@123gmail.com</div>
    </div>
    <div className="flex flex-1 items-center">
      <div className='lg:w-1/5 w-1/2'>Organization</div>
      <div className='text-blue-500 w-1/2'>Your Organization</div>
    </div>
  
  </div>
  )
}

export default Info