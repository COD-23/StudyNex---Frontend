import { create } from "zustand";

export const chatStore = create((set) => ({
  chatDetails: {},
  setChatDetails: (data) => set(() => ({ chatDetails: data })),
}));
