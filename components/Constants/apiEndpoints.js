export const ApiUrl =
  process.env.NEXT_PUBLIC_APP_ENV == "production"
    ? "https://study-nex-backend.vercel.app/"
    : "http://localhost:3001/api";
    
//GET
export const user = "/user";
export const getOrg = "/get-org";
export const getChannelList = "/fetch-all-channels";

//POST 
export const loginApi = "/login";
export const registerApi = "/register";
export const forgotPasswordApi = "/forgot-password";
export const resetPasswordApi = "/reset-password";
export const createOrgApi = "/create-org";
export const joinOrgApi = "/join-org";
export const createChannelApi = "/create-channel";
export const joinChannelApi = "/join-channel";
export const channelListAPi = "/channel-list";
