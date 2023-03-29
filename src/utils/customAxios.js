import axios from "axios";
import jwtDecode from "jwt-decode";

const BASE_URL = "http://54.180.121.247:8001";
// authorized 관련 기능 구현 필요
export const authorizedAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const unauthorizedAxios = axios.create({
  baseURL: BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// accessToken 만료시간으로 판별
// 만료됐으면 reissue api 호출해서 setAccessTokenHeader
export const checkToken = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const decode = jwtDecode(accessToken);

  const nowDate = new Date().getTime() / 1000;

  // 토큰 만료시간이 지났다면
  if (decode.exp < nowDate) {
    const { data } = await unauthorizedAxios.post(`auth/reissue`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const { refreshToken } = data.data;
    setAccessTokenHeader(refreshToken);
    //header에만 보관해도 되는 것인가?
  }
};

// 로그인이 되거나 재발급됐을 때 헤더에 추가하는 기능
export const setAccessTokenHeader = (accessToken) => {
  authorizedAxios.defaults.headers.common[ //인증된 axios
    "Authorization"
  ] = `Bearer ${accessToken}`;
  // https://blog.logrocket.com/using-axios-set-request-headers/ 참고하시면 좋을 것 같습니다!
};

authorizedAxios.interceptors.request.use(checkToken()); //인증된 axios
// loginAxios.interceptors.request.use(checkToken);
