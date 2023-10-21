"use client"
import { GirlImage } from "@/components/Constants/imageContants";
import LottieComponent from "@/components/auth/Lottie";
import RegisterComponent from "@/components/auth/Register";
import Image from "next/image";
import React from "react";

const Register = () => {
  return (
    <div className="h-screen landingHome flex bg-register">
      <div className="flex-1 flex justify-center items-center">
        <RegisterComponent />
      </div>
      <div className="flex-1 lg:flex hidden">
      </div>
    </div>
  );
};

export default Register;
