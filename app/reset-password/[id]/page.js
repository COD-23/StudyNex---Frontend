import ResetPassword from "@/components/auth/ResetPassword";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
      <ResetPassword />
    </div>
  );
};

export default page;
