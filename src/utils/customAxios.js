import axios from "axios";

const BASE_URL = 'http://localhost:3001'

// authorized 관련 기능 구현 필요
export const authorizedAxios = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})