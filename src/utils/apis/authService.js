import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginAxios } from "utils/customAxios";
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

export const checkToken = async (req) => {
  const accessToken = localStorage.getItem("accessToken");
  console.log("check token!! : ", accessToken);
  if (!accessToken) {
    return;
  }

  const decode = jwtDecode(accessToken);
  const nowDate = new Date().getTime() / 1000;

  // 토큰 만료시간이 지났다면
  if (decode.exp < nowDate) {
    console.log("try reissue: ", accessToken);
    try {
      const { data } = await unauthorizedAxios.post(
        "/auth/reissue",
        undefined,
        {
          headers: {
            Authorization: ` Bearer ${accessToken}`,
          },
        },
      );

      // setAccessTokenHeader(data.data.accessToken);
      const newAccessToken = data.data.accessToken;
      localStorage.setItem("accessToken", newAccessToken);
      req.headers.Authorization = `Bearer ${newAccessToken}`; // 여기
    } catch (e) {
      console.log("error during refresh token: ", e);
      // await authorizedAxios.get(/auth/logout, {});
      // localStorage.removeItem('accessToken');
      // window.location.replace('/');
    }
  } else {
    console.log("아직 만료되지 않은 토큰");
    req.headers.Authorization = `Bearer ${accessToken}`;
  }

  return req;
};

authorizedAxios.interceptors.request.use(checkToken); //인증된 axios

export const authService = {
  login,
  logout,
};
