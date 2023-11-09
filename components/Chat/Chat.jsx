import React, { useMemo } from "react";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";

const Chat = () => {
  const messages = useMemo(
    () => [
      {
        type: "sender",
        message: "Hello",
        name: "Bhupendra Jogi",
        msg_type: "text",
      },
      {
        type: "receiver",
        message: "Hello! Heyy",
        name: "Vedant kale",
        msg_type: "text",
      },
      {
        type: "sender",
        message:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, cupiditate?",
        name: "Elvish bhaii",
        msg_type: "text",
      },
      {
        type: "receiver",
        message: "Here you go",
        link: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
        name: "Vedant kale",
        msg_type: "image",
      },
      {
        type: "sender",
        message:
          "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        name: "Bhupendra Jogi",
        msg_type: "text",
      },
      {
        type: "receiver",
        message:
          "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        name: "Vedant kale",
        msg_type: "text",
      },
      {
        type: "receiver",
        message:
          "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        name: "Vedant kale",
        msg_type: "text",
      },
      {
        type: "sender",
        message:
          "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor.",
        name: "Elvish bahiii",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&usqp=CAU",
        msg_type: "image",
      },
    ],
    []
  );
  return (
    <ScrollToBottom className="h-[calc(100vh-76px-72px)] relative w-full flex-1 bg-slate-100 overflow-y-scroll scrollbar-none">
      <div className="p-4 flex flex-col gap-2">
        <div>
          <p className="text-center text-xs text-gray-500 my-2">
            Today, 07-11-2023
          </p>
        </div>
        {messages.map((data, index) => (
          <Message key={index} data={data} />
        ))}
      </div>
    </ScrollToBottom>
  );
};

export default Chat;
