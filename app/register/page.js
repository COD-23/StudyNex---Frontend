"use client"
import RegisterComponent from "@/components/auth/Register";
import Image from "next/image";
import React from "react";

const Register = () => {
  return (
    <div className="h-screen bg-white flex">
      {/* <div className="flex-1 flex justify-center items-center">
        <RegisterComponent />
      </div> */}
      <div className="w-full h-full flex-1 bg-black register bg-no-repeat bg-cover bg-center"></div>
    </div>
  );
};

export default Register;
