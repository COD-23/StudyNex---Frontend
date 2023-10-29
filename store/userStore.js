import { user } from "@/components/Constants/apiEndpoints";
import { getRequest } from "@/config/axiosInterceptor";
import { getCookie } from "cookies-next";
import { create } from "zustand";

export const userDetailsStore = create((set) => ({
  userDetails: [],
  getUserDetails: async () => {
    try {
        const response = await getRequest({
          url: user,
          token:getCookie('token'),
        });
        const data = await response;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
  }
}));