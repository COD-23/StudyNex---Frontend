import React, { useState } from "react";
import PopupContainer from "../Layouts/PopupContainer";
import Title from "../Helpers/Title";
import Description from "../Helpers/Description";
import Image from "next/image";
import { Upload } from "../Constants/imageContants";
import PrimaryBtn from "../Helpers/PrimaryBtn";
import toast from "react-hot-toast";

const CreateOrgPopup = ({ setPopup }) => {
  const [image, setImage] = useState(null);
  const uploadImage = (file) => {
    if (file === undefined) {
      toast.error("Invalid Image!");
      return;
    }
    if (
      file.type == "image/png" ||
      file.type == "image/jpg" ||
      file.type == "image/jpeg"
    ) {
      setImage(URL.createObjectURL(file));
      // const data = new FormData();
      // data.append("file", file);
      // data.append("upload_preset", "study-nex");
      // data.append("cloud_name", "dgu3ljso6");
      // fetch("https://api.cloudinary.com/v1_1/dgu3ljso6/image/upload", {
      //   method: "post",
      //   body: data,
      // })
      //   .then((res) => res.json())
      //   .then((res) => {
      //     console.log(res.url);
      //     setValue("image", res.url.toString());
      //   });
    } else {
      toast.error("Invalid Image!");
    }
  };
  return (
    <PopupContainer setPopup={setPopup} closeBtn>
      <div className="bg-white w-[90vw] md:w-[50vw] rounded-md shadow-md py-6 lg:px-10 px-4 flex flex-col gap-3">
        <Title>Create Your Organization</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          veritatis! Asperiores id possimus provident recusandae. In autem
          mollitia atque necessitatibus!
        </Description>
        <form className="flex flex-col gap-4">
          <div className="flex justify-center">
            <label
              className="m-auto relative flex justify-center"
              htmlFor="image"
            >
              {image ? (
                <img
                  src={image}
                  alt=""
                  className="w-24 h-24 cursor-pointer rounded-full object-cover"
                />
              ) : (
                <Image src={Upload} alt="" className="cursor-pointer" />
              )}
              <input
                id="image"
                type="file"
                accept="image/*"
                className="opacity-0 text-[0.4rem] absolute"
                onChange={(e) => uploadImage(e.target.files[0])}
              />
            </label>
          </div>
          <div className="input-group w-full">
            <input
              id="name"
              type="text"
              required
              className="input"
              // {...register("name", { required: true, maxLength: 30 })}
            />
            <label htmlFor="name" className="placeholder">
              Organization Name
            </label>
          </div>
          <PrimaryBtn label="Create" className="mb-4" />
        </form>
      </div>
    </PopupContainer>
  );
};

export default CreateOrgPopup;
