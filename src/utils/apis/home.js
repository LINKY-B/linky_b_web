import { authorizedAxios } from "utils/customAxios";

const commonErrorMsg = (errorMessage) => `${errorMessage}`;

// 홈 화면 - 
export const fetchHomeApi = async () => {
    const { data } = await authorizedAxios.get('/home/all');
    return data.data;
}

// 홈 화면 - 연결 시도
export const tryMatch = async ({ id }) => {
    const { data } = await authorizedAxios.post(`/match/${id}`);
    const { errors, message } = data;

    if (errors) {
        throw new Error(commonErrorMsg(message));
    }

    return data.data;
}

// 홈 - 홈 목록 검색
export const fetchHomeSearch = async (q) => {
    const { data } = await authorizedAxios.get(`/home/search?nickName=${q}`);
    return data.data;
}