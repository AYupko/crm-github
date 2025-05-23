import { create } from "zustand";
import { UserStore } from "./types";

export const userStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
