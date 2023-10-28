import React from 'react'
import PopupContainer from '../Layouts/PopupContainer'
import Title from '../Helpers/Title';
import Description from '../Helpers/Description';
import PrimaryBtn from '../Helpers/PrimaryBtn';

const JoinOrgPopup = ({setPopup}) => {
  return (
    <PopupContainer setPopup={setPopup} closeBtn>
      <div className="bg-white w-[90vw] md:w-[50vw] rounded-md shadow-md py-6 lg:px-10 px-4 flex flex-col gap-3">
        <Title>Join Organization</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          veritatis! Asperiores id possimus provident recusandae. In autem
          mollitia atque necessitatibus!
        </Description>
        <form className="flex flex-col gap-4">
          <div className="input-group w-full">
            <input
              id="code"
              type="text"
              required
              className="input"
              // {...register("name", { required: true, maxLength: 30 })}
            />
            <label htmlFor="code" className="placeholder">
              Organization Code
            </label>
          </div>
          <div className="mb-4 leading-10">
            <p className="font-bold">To sign in with a organization code</p>
            <li className="text-xs text-[#838186]">
              Use an authorized account
            </li>
            <li className="text-xs text-[#838186]">
              Use a class code with 6-7 letters and numbers and no space or
              symbols
            </li>
          </div>
          <PrimaryBtn label="Join" className="mb-4" />
        </form>
      </div>
    </PopupContainer>
  );
}

export default JoinOrgPopup