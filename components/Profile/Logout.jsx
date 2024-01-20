import React from 'react'
import PopupContainer from '../Layouts/PopupContainer'

const Logout = () => {
  return (
    <PopupContainer setPopup={setPopup} closeBtn>
      <div className='bg-white h-72 w-96 rounded-md'></div>
    </PopupContainer>
  )
}

export default Logout