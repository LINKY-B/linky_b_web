import { privateAxios } from "utils/customAxios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";

import { useSelector } from "react-redux";

const usePrivateAxios = () => {
  const auth = useSelector((state) => state.auth);
  const refresh = useRefreshToken();

  useEffect(() => {
    //요청 인터셉트
    const requestIntercept = privateAxios.interceptors.request.use(
      (config) => {
        //인증 헤더가 존재하지 않으면 재시도가 아님( 초기 요청)
        if (!config.headers["Authorization"]) {
          //처음 로그인할 때 제공된 액세스토큰
          config.headers["Authorization"] = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    //응답 인터셉트
    const responseIntercept = privateAxios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return privateAxios(prevRequest);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      privateAxios.interceptors.request.eject(requestIntercept);
      privateAxios.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return privateAxios;
};

export default usePrivateAxios;
