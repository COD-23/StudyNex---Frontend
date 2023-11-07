"use client"
import { channelProfileStore } from "@/store/channelProfileStore";
import classNames from "classnames";
import React from "react";

function ChatSection() {
  const showChannelProfile = channelProfileStore(
    (state) => state.showChannelProfile
  );
  return (
    <div className="flex-1">
      <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias adipisci molestiae accusantium itaque saepe assumenda quidem ducimus, harum temporibus pariatur dolore quas nostrum omnis incidunt nesciunt libero vero eveniet dolores. Hic, iusto porro. Iusto, est cupiditate temporibus reprehenderit, voluptatem quam accusamus sint numquam quaerat repellendus quasi itaque fuga ratione asperiores necessitatibus totam harum ab iste culpa tenetur sequi iure. Inventore facere blanditiis ex id consectetur in odit nobis placeat, magnam delectus quaerat illum iure vel praesentium dolore quam iste. Saepe dolorum dolores, iure blanditiis accusamus est expedita sapiente dicta enim ducimus tenetur aut. Unde corporis repudiandae, aspernatur animi quisquam voluptatibus.</div>
    </div>
  );
}
{/* <div
      className={classNames(
        showChannelProfile
          ? "lg:w-[calc(100vw-280px-280px)]"
          : "lg:w-[calc(100vw-280px)]",
        "w-full overflow-hidden"
      )}
    ></div> */}

export default ChatSection;
