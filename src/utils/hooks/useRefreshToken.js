import axios from "axios";
import { privateAxios } from "utils/customAxios";
const useRefreshToken = () => {
  const refresh = async () => {
    const response = await privateAxios.get("/reissue", {});

    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
