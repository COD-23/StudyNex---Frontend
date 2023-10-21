"use client";
import React from "react";
import { motion } from "framer-motion";
import PrimaryBtn from "../Buttons/PrimaryBtn";

const ResetPassword = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:w-[35%] w-full lg:mx-0 mx-2 lg:px-10 px-4 py-8 pb-12 bg-white rounded-md shadow-md"
    >
      <p className="text-base font-extrabold pt-4  mb-2">Create new password</p>
      <p className="text-xs text-[#838186] mb-6">
        Set your new password so you can login and access{" "}
        <span className="text-blue-500">StudyNex</span>
      </p>
      <form action="" className="flex flex-col gap-4">
        <div className="input-group w-full">
          <input
            id="password"
            type="password"
            required
            className="input"
            // {...register("password", {
            //   required: true,
            //   pattern: {
            //     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            //     message: "password is invalid",
            //   },
            // })}
          />
          <label for="password" className="placeholder">
            Password
          </label>
          {/* {errors.password && errors.password.type === "required" && (
                <span className="text-red-600 text-xs">password is required</span>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <span className="text-red-600 text-xs">
                  {errors.password.message}
                </span>
              )} */}
        </div>
        <div className="input-group w-full">
          <input
            id="confirm_password"
            type="password"
            required
            className="input"
            // {...register("confirm_password", {
            //   required: true,
            //   pattern: {
            //     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            //     message: "password is invalid",
            //   },
            // })}
          />
          <label for="confirm_password" className="placeholder">
            Confirm password
          </label>
          {/* {errors.confirm_password && errors.confirm_password.type === "required" && (
                <span className="text-red-600 text-xs">confirm_password is required</span>
              )}
              {errors.confirm_password && errors.confirm_password.type === "pattern" && (
                <span className="text-red-600 text-xs">
                  {errors.confirm_password.message}
                </span>
              )} */}
        </div>
        <PrimaryBtn
          label="Reset Password"
          className="w-fit text-xs capitalize ml-auto"
        />
      </form>
    </motion.div>
  );
};

export default ResetPassword;
