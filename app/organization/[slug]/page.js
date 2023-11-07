import ParentContainer from "@/components/Layouts/ParentContainer";
import ChannelProfile from "@/components/Organization/Channel/ChannelProfile";
import ChatSection from "@/components/Organization/Channel/ChatSection";
import getChannels from "@/lib/getChannelList";
import getOrganization from "@/lib/getOrganization";
import React from "react";

export default async function page() {
  const orgData = await getOrganization();
  const channelsData = await getChannels();
  return (
    <ParentContainer orgData={orgData} channelsData={channelsData}>
        <ChatSection />
        <ChannelProfile />
    </ParentContainer>
  );
}

// export default page;
