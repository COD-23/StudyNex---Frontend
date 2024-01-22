import {
  ApiUrl,
  getAdminQuizzes,
  getChannel,
  getChannelList,
  getOrg,
} from "@/components/Constants/apiEndpoints";
import { getRequest, getRequestV2 } from "@/config/axiosInterceptor";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function getQuizData(context) {
  const token = cookies().get("token")?.value;
  let channelData = [];
  if (!token) {
    redirect("/login");
  }
  try {
    const response = await getRequest({
      url: getAdminQuizzes,
      params: `?org_id=${context.searchParams.org_id}&channel_id=${context.params.id}&active=true`,
      token: token,
    }); 
    const data = response.data.data;
    if (response.status) {
        channelData = data;
    }
  } catch (error) {
    console.log(error);
  }
  return channelData;
}
