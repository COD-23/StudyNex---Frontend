import React from "react";
import RightContainer from "../Layouts/RightContainer";
import Image from "next/image";
import { QuizLogo } from "../Constants/imageContants";
import SecondaryBtn from "../Helpers/SecondaryBtn";

const ProfilePage = () => {
  return (
    <RightContainer>
      <div className="p-5 grid place-content-center place-items-center gap-2">
        <Image src={QuizLogo} className="w-24 h-24 rounded-full" alt="profile image" />
        <p className="font-semibold text-lg">Aaditya Padte</p>
        <p className="">ajpadte@gmail.com</p>
        <SecondaryBtn>
          <p className="font-semibold">Edit</p>
        </SecondaryBtn>
      </div>
    </RightContainer>
  );
};

export default ProfilePage;
