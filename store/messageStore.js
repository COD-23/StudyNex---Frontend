import { create } from "zustand";

export const messageStore = create((set) => ({
  messages: {},
  setMessages: (data) => set(() => ({ messages: data })),
}));
