import axios from "axios";
import { API_BASE_URL } from "@/shared/constants/api";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      "An unexpected error occurred";

    console.error("[API Error]", message);
    return Promise.reject(new Error(message));
  }
);
