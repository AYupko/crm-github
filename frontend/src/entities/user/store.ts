import { create } from "zustand";
import { User, UserStore } from "./types";

export const userStore = create<UserStore>((set) => ({
  user: null,
  isAuthorized: false,

  setUser: (user: User) => set({ user, isAuthorized: true }),
  logout: () => set({ user: null, isAuthorized: false }),
}));

export const selectIsAuthorized = (state: UserStore) => state.isAuthorized;
