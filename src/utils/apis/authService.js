import { authorizedAxios } from "utils/customAxios";
import { unauthorizedAxios } from "utils/customAxios";

import jwtDecode from "jwt-decode";
import axios from "../../../node_modules/axios/index";

const login = async (email, password) => {
  try {
    const response = await unauthorizedAxios.post(`/auth/login`, {
      email,
      password,
    });

    //백엔드에서 data에 상태와 토큰(data)를 넘겨줌
    const { accessToken } = response.data.data;
    console.log("accesstoken: " + accessToken);
    localStorage.setItem("accessToken", accessToken);

    //API요청하는 콜마다 헤더에 accessToken 담기
    // if (!authorizedAxios.defaults.headers["Authorization"]) {
    //   console.log("출력체크");
    //   authorizedAxios.defaults.headers[
    //     "Authorization"
    //   ] = `Bearer ${accessToken}`;
    // }
  } catch (error) {
    //메세지 객체에 여러 상황의 에러메세지 담겨야함
    console.log("**" + error.response.data.message);
    console.log("**" + error.response.data.errors.reason);
    throw error;
  }
};

// const reissue = async()=>{

// }

const logout = async () => {
  try {
    await authorizedAxios.post(`/auth/logout`, {});
    localStorage.removeItem("accessToken");
    delete authorizedAxios.defaults.headers.common["Authorization"];
  } catch (error) {
    throw error.response.data;
  }
};

// accessToken 만료시간으로 판별
// 만료됐으면 reissue api 호출해서 setAccessTokenHeader
// const checkToken = async (config) => {
//   const accessToken = localStorage.getItem("accessToken");
//   console.log("check token: " + accessToken);

//   if (accessToken) {
//     const decode = jwtDecode(accessToken);
//   }
//   const nowDate = new Date().getTime() / 1000;

//   // 토큰 만료시간이 지났다면
//   // if (decode.exp < nowDate) {
//   if (true) {
//     try {
//       const response = await authorizedAxios.post(`/auth/reissue`, {});
//       delete authorizedAxios.defaults.headers.common["Authorization"];
//       const { accessToken } = response.data.data;
//       console.log(accessToken);
//       if (!config.headers["Authorization"]) {
//         config.headers["Authorization"] = `Bearer ${accessToken}`;
//       }
//       console.log("이게 나와야하는데 " + response);
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//     //header에만 보관해도 되는 것인가?
//   }
// };
// const sendEmail= async(email)=>{
//     try{
//         await unauthorizedAxios.post('/auth/reset-password/send-email',{email});
//     }
// }

// 로그인이 되거나 재발급됐을 때 헤더에 추가하는 기능
const setAccessTokenHeader = (accessToken) => {
  authorizedAxios.defaults.headers.common[ //인증된 axios
    "Authorization"
  ] = `Bearer ${accessToken}`;
  // https://blog.logrocket.com/using-axios-set-request-headers/ 참고하시면 좋을 것 같습니다!
};

// if (decode.exp < nowDate) {
//   console.log("check token1: " + accessToken);
//   console.log(config);

// if (originalConfig.url === "/auth/reissue") {
//   console.log("이미 url이 reissue라면");
//   return originalConfig;

authorizedAxios.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    const cookie = config.headers.cookie; // 현재 쿠키 가져오기
    console.log("쿠키확인" + cookie);
    if (cookie) {
      config.headers["Cookie"] = cookie; // 요청 헤더에 현재 쿠키 추가하기
    }
    console.log("sad" + JSON.stringify(config));
    console.log("config_header : " + config.headers);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
); //인증된 axios

authorizedAxios.interceptors.response.use(
  (response) => {
    console.log("pass");
    return response;
  },

  async (err) => {
    console.log("에러에러에러", err);
    const originalConfig = err.config;
    const accessToken = localStorage.getItem("accessToken");

    if (
      err?.response?.data?.status === 400 &&
      err?.response?.data?.code === "A002" &&
      !originalConfig._retry &&
      accessToken
    ) {
      console.log("if문 통과");
      console.log("err.response: " + JSON.stringify(err.response));
      originalConfig._retry = true;
      // const decode = jwtDecode(accessToken);
      // const nowDate = new Date().getTime() / 1000;

      console.log("헤더정보: " + originalConfig.headers.Authorization);
      console.log("액세스토큰정보: " + accessToken);

      try {
        const response = await unauthorizedAxios.post(
          "/auth/reissue",
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Cookie:
                "refreshToken=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJtZW1iZXJJZCI6IjUiLCJhdXRob3JpdGllcyI6IlVTRVIiLCJleHAiOjE2ODI4NDQyMjR9.uFbEQqPCkQmd7t5oc7V19XPn6u2cj3tHuUHxxxWyz247JWjDjtGJ9pObDr95Jj7uidOn2c-Q9TF5lfsQGG7hNw",
            },
          },
        );

        if (response) {
          console.log(JSON.stringify(response.data.data.accessToken));
          // const newAccessToken = response.data.data;
          // console.log("^^" + newAccessToken);

          // localStorage.setItem("accessToken", newAccessToken);
          // originalConfig.headers["Authorization"] = `Bearer ${newAccessToken}`;

          console.log("이게 나와야하는데 " + response.data.data.accessToken);
        }
      } catch (err) {
        console.log("Failed to reissue access token.", JSON.stringify(err));
        // window.location.href = "/";
        if (err.response.status === 400) {
          console.log("reissue API 요청이 실패했습니다. 다시 로그인해주세요.");
          return Promise.reject(err);
        }
        console.log(err.config);
        return unauthorizedAxios(err.config);
      }
    } else {
      Promise.reject(err);
    }
  },
);
export const authService = {
  login,
  logout,
};
