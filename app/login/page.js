import LoginComponent from '@/components/auth/Login';
import { redirect } from 'next/navigation';
import React from 'react'
import { cookies } from "next/headers";

const isLoggedIn = () => {
  const token = cookies().get("token")?.value;
  if (token) {
    redirect('/organization');
  }
};

const Login = () => {
  isLoggedIn();
  return (
    <div className="h-screen landingHome flex bg-login">
      <div className="flex-1 lg:flex hidden  ">
    </div>
      <div className="flex-1 flex justify-center items-center">
        <LoginComponent />
      </div>
    </div>
  );
}

export default Login