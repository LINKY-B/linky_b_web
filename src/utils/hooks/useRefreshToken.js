import axios from "axios";
import { loginAxios } from "utils/customAxios";

const refreshToken = async () => {
  try {
    const response = await loginAxios.post("/reissue");

    const { accessToken } = response.data;
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    
    return accessToken;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
