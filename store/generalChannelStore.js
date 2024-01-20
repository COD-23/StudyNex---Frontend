import { create } from "zustand";

export const generalChannelStore = create((set) => ({
  generalChannel: {},
  setGeneralChannel: (data) => set(() => ({ generalChannel: data })),
}));
