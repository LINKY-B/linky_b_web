import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginAxios } from "utils/customAxios";
import { authorizedAxios } from "utils/customAxios";
import { unauthorizedAxios } from "utils/customAxios";
import { setAccessTokenHeader } from "utils/customAxios";
const login = async (email, password) => {
  try {
    const response = await authorizedAxios.post(`/auth/login`, {
      email,
      password,
    });

    //백엔드에서 data에 상태와 토큰(data)를 넘겨줌
    const { accessToken } = response.data.data;
    localStorage.setItem("accessToken", accessToken);

    //API요청하는 콜마다 헤더에 accessToken 담기
    setAccessTokenHeader(accessToken);

    return { accessToken };
  } catch (error) {
    //메세지 객체에 여러 상황의 에러메세지 담겨야함
    console.log(error.response.data.message);
    throw error;
  }
};

const logout = async () => {
  try {
    await authorizedAxios.get(`auth/logout`, {});
  } catch (error) {
    throw error.response.data;
  }
};

// const sendEmail= async(email)=>{
//     try{
//         await unauthorizedAxios.post('/auth/reset-password/send-email',{email});
//     }
// }
export const authService = {
  login,
  logout,
};
