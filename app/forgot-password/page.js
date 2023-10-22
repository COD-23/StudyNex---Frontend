import ForgotPassword from '@/components/auth/ForgotPassword'
import React from 'react'
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';

const isLoggedIn = () => {
  const token = cookies().get("token")?.value;
  if (token) {
    redirect("/organization");
  }
};
const page = () => {
  isLoggedIn();
  return (
    <div className="flex landingHome justify-center items-center">
      <ForgotPassword />
    </div>
  );
}

export default page