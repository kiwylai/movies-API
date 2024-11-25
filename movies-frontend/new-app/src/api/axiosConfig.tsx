import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://e215-94-139-31-105.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});

export default api;