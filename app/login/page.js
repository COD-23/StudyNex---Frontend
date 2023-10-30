import LoginComponent from '@/components/auth/Login';
import { redirect } from 'next/navigation';
import React from 'react'
import { cookies } from "next/headers";

const isLoggedIn = () => {
  const token = cookies().get("token")?.value;
  const org = cookies().get("org")?.value;
  if (token && org) {
    redirect("/organization/" + org);
  }
};

const Login = () => {
  isLoggedIn();
  return (
    <div className="h-screen landingHome flex bg-login bg-no-repeat bg-cover bg-left">
      <div className="flex-1 lg:flex hidden  ">
    </div>
      <div className="flex-1 flex justify-center items-center">
        <LoginComponent />
      </div>
    </div>
  );
}

export default Login