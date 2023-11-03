import React from 'react'
import SideBar from './SideBar'

const ParentContainer = ({children}) => {
  return (
    <div className='grid grid-cols-[280px,1fr] gap-10 mx-auto bg-[#e9f8f5]'>
      <SideBar/>
      {children}
    </div>
  )
}

export default ParentContainer
