import React from 'react'
import SideBar from './SideBar'

const ParentContainer = ({children}) => {
  return (
    <div className='grid grid-cols-[350px,2fr] gap-10 mx-auto'>
      <SideBar/>
      {children}
    </div>
  )
}

export default ParentContainer
