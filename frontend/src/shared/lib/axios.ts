import axios, { AxiosError } from "axios";
import { authService } from "../api";
import { removeUser } from "@/entities/user";

const API_URL = "http://localhost:3000/api";

const baseQuery = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

baseQuery.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.log("logout user");
      removeUser();
      authService.logout();
    }

    return Promise.reject(error);
  }
);

export { baseQuery };
