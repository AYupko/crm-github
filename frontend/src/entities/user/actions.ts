import { userStore } from "./store";

export const setUser = userStore.getState().setUser;
export const removeUser = userStore.getState().logout;
