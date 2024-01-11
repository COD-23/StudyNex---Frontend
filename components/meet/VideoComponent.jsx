import { MicOff, VideoOff } from "lucide-react";
import React from "react";
import ReactPlayer from "react-player";

const VideoComponent = ({ players }) => {
  const numberOfVideos = Object.keys(players).length;

  return (
    <div
      className={`grid gap-6 transition flex-1 p-4`}
      style={{
        gridTemplateColumns: `repeat(${Math.min(
          numberOfVideos,
          3
        )}, minmax(0, 1fr))`,
      }}
    >
      {Object.keys(players).map((playerId) => {
        const { url, playing, muted, name } = players[playerId];
        return (
          <div
            className="relative h-[calc(100vh-68px-78px-42px)]"
            key={playerId}
          >
            <ReactPlayer
              url={playing && url}
              playing={playing}
              muted={muted}
              width="100%"
              height="100%"
              //  width={700 / (Math.min(numberOfVideos, 3) / 1.5)}
              //  height={400 / (Math.min(numberOfVideos, 3) / 1.5)}
            />
            {!playing && <div className="absolute top-0 rounded-2xl bg-black w-full h-full"></div>}
            {muted && (
              <div className="absolute top-0 right-0 bg-[rgb(0,0,0,0.7)] text-white p-4 rounded-bl-2xl rounded-tr-2xl">
                <MicOff size={19} />
              </div>
            )}
            {!playing && (
              <div className="absolute top-0 left-0 bg-[rgb(0,0,0,0.7)] text-white p-4 rounded-br-2xl rounded-tl-2xl">
                <VideoOff size={19} />
              </div>
            )}
            <div className="absolute bottom-0 right-0">
              {name && (
                <p className="text-sm bg-[rgb(0,0,0,0.7)] text-white p-4 rounded-br-2xl rounded-tl-2xl">
                  {name}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoComponent;
