import axios from "axios";

export const api = axios.create({
  baseURL: typeof window !== "undefined" ? "" : process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const msg = err.response?.data?.error;
    if (msg && typeof msg === "string") {
      return Promise.reject(new Error(msg));
    }
    return Promise.reject(err);
  }
);
