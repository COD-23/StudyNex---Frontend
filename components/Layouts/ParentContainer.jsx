import React from 'react'
import SideBar from './SideBar'
import RightContainer from './RightContainer'

const ParentContainer = ({children}) => {
  return (
    <div className='grid grid-cols-[350px,2fr] gap-10 mx-auto'>
      <SideBar/>
      {children}
      <RightContainer/>
    </div>
  )
}

export default ParentContainer
