"use client"
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import PrimaryBtn from "../Buttons/PrimaryBtn";

const LoginComponent = () => {
  const [type, setType] = useState(true);
  const [confirmType, setConfirmType] = useState(true);

  const togglePassword = (id) => {
    let input = document.getElementById(id);
    id === "password" ? setType(!type) : setConfirmType(!confirmType);
    if (input.type == "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  };
  return (
    <div className="lg:w-[70%] w-full lg:mx-0 mx-2 lg:px-10 px-4 py-8 pb-12 bg-white rounded-md shadow-md">
      <p className="text-xl font-extrabold pt-4 text-center">
        <span className="text-blue-500">Welcome</span> Back !
      </p>
      <p className="text-xs text-[#838186] text-center mb-6">
        Not a member?{" "}
        <a className="text-[#4983f6]" href="/register">
          Sign up now
        </a>
      </p>
      <form
        action=""
        className="flex flex-col gap-4"
        // onSubmit={handleSubmit(submitData)}
      >
        <label className="w-1/2 m-auto relative" for="image">
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
            Email or username
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
            onClick={() => togglePassword("password")}
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
        <a className="text-[#4983f6] text-end pr-4 text-xs" href="/login">
          Forgot password?
        </a>
        <PrimaryBtn label="Log in" />
      </form>
    </div>
  );
};

export default LoginComponent;
