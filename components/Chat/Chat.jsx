import React, { useMemo } from 'react'
import Message from './Message'

const Chat = () => {
  const messages = useMemo(
    () => [
      {
        type: "sender",
        message: "Hello",
        name: "Bhupendra Jogi",
      },
      {
        type: "receiver",
        message: "Hello! Heyy",
        name: "Vedant kale",
      },
      {
        type: "sender",
        message:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, cupiditate?",
        name: "Elvish bhaii",
      },
      {
        type: "receiver",
        message: "Lorem ipsum dolor sit amet.",
        name: "Vedant kale",
      },
      {
        type: "sender",
        message:
          "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        name: "Bhupendra Jogi",
      },
      {
        type: "receiver",
        message:
          "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        name: "Vedant kale",
      },
    ],
    []
  );
  return (
    <div className="flex-1 bg-slate-100 p-4 flex flex-col gap-2">
      <div>
        <p className='text-center text-xs text-gray-500 my-2'>Today, 07-11-2023</p>
      </div>
      {messages.map((data, index) => (
        <Message key={index} data={data} />
      ))}
    </div>
  );
}

export default Chat