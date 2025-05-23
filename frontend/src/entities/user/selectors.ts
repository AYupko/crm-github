import { UserStore } from "./types";

export const selectIsAuthorized = (state: UserStore) => state.user !== null;
