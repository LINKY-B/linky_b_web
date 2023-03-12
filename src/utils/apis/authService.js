import axios from "axios";
import usePrivateAxios from "utils/hooks/usePrivateAxios";
import { loginAxios } from "utils/customAxios";

const login = async (phone, password) => {
  try {
    const response = await usePrivateAxios.post(
      `/users/auth/login`,
      JSON.stringify({
        phone,
        password,
      }),
    );

    //백엔드에서 data에 상태와 토큰(data)를 넘겨줌
    const { accessToken } = response.data.data;

    return { accessToken };
  } catch (error) {
    //메세지 객체에 여러 상황의 에러메세지 담겨야함
    throw error.response.data.message;
  }
};

const logout = async () => {
  try {
    await loginAxios.post(`/logout`, {});
  } catch (error) {
    throw error.response.data;
  }
};

export const authService = {
  login,
  logout,
};
