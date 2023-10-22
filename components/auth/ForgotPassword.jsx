"use client";
import React from "react";
import { motion } from "framer-motion";
import PrimaryBtn from "../Buttons/PrimaryBtn";

const ForgotPassword = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:w-[35%] w-full lg:mx-0 mx-2 lg:px-10 px-4 py-8 pb-12 bg-white rounded-md shadow-md"
    >
      <p className="text-base font-extrabold pt-4  mb-2">
        Forgot Password ?
      </p>
      <p className="text-xs text-[#838186] mb-6">
        Enter your email address associated with your account and we will send you a recovery link to reset your password.
      </p>
      <form action="" className="flex flex-col gap-4">
        <div className="input-group w-full">
          <input
            id="email"
            type="text"
            required
            className="input"
            // {...register("email", {
            //   required: true,
            //   pattern: {
            //     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            //     message: "Email is invalid",
            //   },
            // })}
          />
          <label htmlFor="email" className="placeholder">
            Email
          </label>
          {/* {errors.email && errors.email.type === "required" && (
                <span className="text-red-600 text-xs">Email is required</span>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <span className="text-red-600 text-xs">
                  {errors.email.message}
                </span>
              )} */}
        </div>
        <PrimaryBtn label="Send" className="w-fit text-xs capitalize ml-auto"/>
      </form>
    </motion.div>
  );
};

export default ForgotPassword;
