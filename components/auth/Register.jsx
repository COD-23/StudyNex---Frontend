
"use client"
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import Image from "next/image";
import { AvatarReg } from "../Constants/imageContants";
import { BiSolidCamera } from "react-icons/bi";
import { motion } from "framer-motion";

const RegisterComponent = () => {
  const [type, setType] = useState(true);

  const togglePassword = () => {
    let input = document.getElementById("password");
    setType(!type);
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="lg:w-[70%] w-full lg:mx-0 mx-2 lg:px-10 px-4 py-8 pb-12 bg-white rounded-md shadow-md"
    >
      <p className="text-xl font-extrabold pt-4 text-center">
        Welcome to <span className="text-blue-500">StudyNex</span> !
      </p>
      <p className="text-xs text-[#838186] text-center mb-6">
        Already a member?{" "}
        <a className="text-[#4983f6]" href="/login">
          Log in now
        </a>
      </p>
      <form
        action=""
        className="flex flex-col gap-4"
        // onSubmit={handleSubmit(submitData)}
      >
        <label className="m-auto relative flex justify-center" for="image">
          <Image
            src={AvatarReg}
            alt=""
            className="w-24 h-24 cursor-pointer rounded-full"
          ></Image>
          <BiSolidCamera className="absolute bottom-0 right-2 text-white text-2xl bg-blue-500 rounded-full p-1 cursor-pointer" />
          <input
            id="image"
            type="file"
            accept="image/*"
            required
            className="opacity-0 text-[0.4rem] absolute"
            // onChange={(e) => uploadImage(e.target.files[0])}
          />
        </label>
        <div className="input-group w-full">
          <input
            id="first_name"
            type="text"
            required
            className="input"
            // {...register("fname", { required: true, maxLength: 30 })}
          />
          <label for="first_name" className="placeholder">
            Name
          </label>
          {/* {errors.fname && errors.fname.type === "required" && (
                  <span className="text-red-600 text-xs">
                    First Name is required
                  </span>
                )}
                {errors.fname && errors.fname.type === "maxLength" && (
                  <span className="text-red-600 text-xs">
                    Max length exceeded
                  </span>
                )} */}
        </div>
        <div className="input-group w-full">
          <input
            id="mobile_number"
            type="tel"
            required
            className="input"
            // {...register("mobile_number", { required: true, maxLength: 30 })}
          />
          <label for="mobile_number" className="placeholder">
            Mobile number
          </label>
          {/* {errors.mobile_number && errors.mobile_number.type === "required" && (
                  <span className="text-red-600 text-xs">
                    First Name is required
                  </span>
                )}
                {errors.mobile_number && errors.mobile_number.type === "maxLength" && (
                  <span className="text-red-600 text-xs">
                    Max length exceeded
                  </span>
                )} */}
        </div>
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
          <label for="email" className="placeholder">
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
        <div className="input-group w-full">
          <input
            id="username"
            type="text"
            required
            className="input"
            // {...register("username", {
            //   required: true,
            //   pattern: {
            //     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            //     message: "username is invalid",
            //   },
            // })}
          />
          <label for="username" className="placeholder">
            Username
          </label>
          {/* {errors.username && errors.username.type === "required" && (
                <span className="text-red-600 text-xs">Username is required</span>
              )}
              {errors.username && errors.username.type === "pattern" && (
                <span className="text-red-600 text-xs">
                  {errors.username.message}
                </span>
              )} */}
        </div>
        <div className="input-group w-full">
          <input
            id="password"
            type="password"
            required
            className="input"
            // {...register("password", { required: true })}
          />
          <label for="password" className="placeholder">
            Password
          </label>
          <p
            className="absolute right-[10px] top-[11px] cursor-pointer"
            onClick={() => togglePassword()}
          >
            {type ? (
              <AiFillEye className="text-[#808080] text-xl" />
            ) : (
              <AiFillEyeInvisible className="text-[#808080] text-xl" />
            )}
          </p>
          {/* {errors.password && errors.password.type === "required" && (
            <span className="text-red-600 text-xs">Password is required</span>
          )} */}
        </div>
        <PrimaryBtn label="Sign Up" />
      </form>
    </motion.div>
  );
};

export default RegisterComponent;
