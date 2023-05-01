import axios from "axios";

import { authorizedAxios } from "utils/customAxios";
import { unauthorizedAxios } from "utils/customAxios";

const login = async (email, password) => {
  try {
    const response = await unauthorizedAxios.post(`/auth/login`, {
      email,
      password,
    });

    //백엔드에서 data에 상태와 토큰(data)를 넘겨줌
    const { accessToken } = response.data.data;
    localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    await authorizedAxios.post(`/auth/logout`, {});
    localStorage.removeItem("accessToken");
    delete authorizedAxios.defaults.headers.common["Authorization"];
  } catch (error) {
    throw error.response.data;
  }
};

const sendEmail = async (email) => {
  try {
    const response = await authorizedAxios.post(
      "/auth/reset-password/send-email",
      { email },
    );
    console.log(JSON.stringify(response, null, 2));
  } catch (error) {
    console.error(error);
  }
};

const reissue = async () => {
  const token = localStorage.getItem("accessToken");
  console.log("만료된 token" + token);
  try {
    const data = await unauthorizedAxios.post(
      `/auth/reissue`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const newToken = data.data?.data?.accessToken;
    return newToken;
  } catch (e) {
    localStorage.removeItem("accessToken");
    console.error(e);
  }
};

authorizedAxios.interceptors.request.use((config) => {
  if (!config.headers) {
    return config;
  }
  const token = localStorage.getItem("accessToken");

  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

authorizedAxios.interceptors.response.use(
  (res) => res,

  async (err) => {
    const {
      config,
      response: { status },
    } = err;

    config.sent = true;
    const newAccessToken = await reissue();

    if (newAccessToken) {
      config.headers.Authorization = `Bearer ${newAccessToken}`;
      localStorage.setItem("accessToken", newAccessToken);
    } else {
    }
    return axios(config);
  },
);

export const authService = {
  login,
  logout,
  sendEmail,
};
