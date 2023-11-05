import React from "react";
import PopupContainer from "../Layouts/PopupContainer";

const CreateChannel = ({ orgDetails, setPopup }) => {
  return (
    <PopupContainer setPopup={setPopup} closeBtn>
        <div className="bg-white w-[90vw] md:w-[50vw] rounded-md shadow-md py-6 lg:px-10 px-4 flex flex-col gap-3">+
        </div>
    </PopupContainer>
  );
};

export default CreateChannel;
