"use client";
import PrimaryBtn from "@/components/Buttons/PrimaryBtn";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, []);
  const handleReset = () => {
    reset();
  };

  return (
    <div className="bg-white absolute inset-0 flex justify-center items-center">
      <p>Oops Something went wrong!!</p>
      <PrimaryBtn label="Try Again" clickEvent={handleReset} />
    </div>
  );
};

export default Error;
