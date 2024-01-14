"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ReactPlayer from "react-player";
import { v4 as uuidv4 } from "uuid";
import Title from "../Helpers/Title";
import { Mic, MicOff, Video, VideoOff } from "lucide-react";
import { userDetailsStore } from "@/store/userStore";

const Lobby = () => {
  const [roomId, setRoomId] = useState("");
  const [myStream, setMyStream] = useState("");
  const router = useRouter();
  const userDetails = userDetailsStore((state) => state.userDetails);
  const getUserDetails = userDetailsStore((state) => state.getUserDetails);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    getUserDetails();
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        setMyStream(stream);
      })
      .catch((error) => {
        toast.error("Something went wrong while getting user media");
        console.log("Error : ", error);
      });
  }, []);

  const createAndJoin = () => {
    const newRoomId = uuidv4();
    router.push(`/room/${newRoomId}`);
  };

  const joinRoom = () => {
    if (roomId) {
      router.push(`/room/${roomId}`);
    }
  };

  return (
    <div className="bg-main h-screen flex justify-center items-center text-black">
      <div className="bg-white rounded-xl p-5 py-20 w-[90vw] px-7 shadow-md flex items-center gap-6">
        <div className="flex-1 flex flex-col items-center gap-4 justify-center relative">
          <ReactPlayer
            url={myStream}
            playing={playing}
            muted={true}
            width="600px"
            height="400px"
          />
          {!playing && (
            <div className="absolute w-[600px] h-[400px] bg-black rounded-lg"></div>
          )}
          <div className="absolute top-5 left-10 text-white text-sm">
            {userDetails?.name}
          </div>
          <div className="absolute flex gap-4 bottom-5">
            <button
              className={`text-white border border-white rounded-full p-4 cursor-pointer  transition duration-150 ${
                muted ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setMuted(!muted)}
            >
              {muted ? <MicOff size={14} /> : <Mic size={14} />}
            </button>
            <button
              className={`text-white border border-white rounded-full p-4 cursor-pointer   transition duration-150 ${
                !playing ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setPlaying(!playing)}
            >
              {playing ? <Video size={14} /> : <VideoOff size={14} />}
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center flex-1 gap-6">
          <Title className="text-3xl mb-8">
            <span className="text-blue-500">Meet</span> And Streaming !
          </Title>
          <div className="flex w-[80%] justify-center items-center gap-3">
            <div className="relative h-10 w-full flex-1">
              <input
                className="peer h-full w-full  rounded-[7px] border border-blue-gray-200 border-t bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                id="roomId"
                type="text"
                required="true"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
              />
              <label
                htmlFor="roomId"
                className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus: peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                Room id
              </label>
            </div>
            <button
              onClick={joinRoom}
              className="bg-blue-500 text-white rounded-md px-4 py-2 hover:scale-105 transition duration-200"
            >
              Join Room
            </button>
          </div>
          <p className="text-2xl font-bold">OR</p>
          <button
            onClick={createAndJoin}
            className="bg-blue-500 text-white rounded-md px-8 py-2 hover:scale-105 transition duration-200"
          >
            Create new Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lobby;