import RegisterComponent from "@/components/auth/Register";
import Image from "next/image";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const isLoggedIn = () => {
  const token = cookies().get("token")?.value;
  if (token) {
    redirect("/organization");
  }
};
const Register = () => {
  isLoggedIn();
  return (
    <div className="h-screen landingHome flex bg-register bg-no-repeat md:bg-left bg-right bg-cover ">
      <div className="flex-1 flex justify-center items-center">
        <RegisterComponent />
      </div>
      <div className="flex-1 lg:flex hidden">
      </div>
    </div>
  );
};

export default Register;
