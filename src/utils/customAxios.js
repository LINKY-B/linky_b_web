import axios from "axios";

const BASE_URL = "http://54.180.121.247:8001";

// const BASE_URL = "https://wj-code-server.com";
// authorized 관련 기능 구현 필요
// 인가가 필요한 axios
export const authorizedAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const unauthorizedAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// loginAxios.interceptors.request.use(checkToken);
