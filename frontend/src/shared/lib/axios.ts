import { userStore } from "@/entities/user";
import axios, { AxiosError } from "axios";

const API_URL = "http://localhost:3000/api";

const baseQuery = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

baseQuery.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      userStore.getState().logout();
    }

    return Promise.reject(error);
  }
);

export { baseQuery };
