import LoginComponent from '@/components/auth/Login';
import React from 'react'

const Login = () => {
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