import axios from "axios";

const API_URL = "http://localhost:8001";

const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/users/auth/login`,
      {
        email,
        password,
      },
      { withCredentials: true },
    );
    const { accessToken, refreshToken } = response.data;
    return { accessToken, refreshToken };
  } catch (error) {
    console.error(error);
    throw error.response.data;
  }
};

const refreshToken = async (refreshToken) => {
  try {
    const response = await axios.post(
      `${API_URL}/users/auth/refresh-token`,
      { refreshToken },
      { withCredentials: true },
    );
    const { accessToken } = response.data;
    return { accessToken };
  } catch (error) {
    throw error.response.data;
  }
};

const logout = async () => {
  try {
    await axios.post(
      `${API_URL}/users/auth/logout`,
      {},
      { withCredentials: true },
    );
  } catch (error) {
    throw error.response.data;
  }
};

export const authService = {
  login,
  logout,
};
