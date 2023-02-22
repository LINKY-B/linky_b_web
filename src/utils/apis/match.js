import { authorizedAxios } from "utils/customAxios";

const commonErrorMsg = (errorMessage) => `${errorMessage}`;

// 연결화면 홈
export const fetchMatchHomeApi = async () => {
    const { data } = await authorizedAxios.get('/match');
    return data.data;
}

// 연결화면 - 내가 연결을 시도한 회원 리스트
export const fetchTryMatchingListApi = async () => {
    const { data } = await authorizedAxios.get('/match/try-matching-list');
    return data.data;
}

// 연결화면 - 나에게 연결을 시도한 회원 리스트
export const fetchTryMatchedListApi = async () => {
    const { data } = await authorizedAxios.get('/match/try-matched-list');
    return data.data;
}

// 연결화면 - 나에게 연결을 시도한 회원의 상세 정보
export const fetchMatchDetail = async (id) => {
    const { data } = await authorizedAxios.get(`/match/try-matched-list/${id}`);
    return data.data;
}

// 연결 수락
export const approveMatch = async ({ id }) => {
    console.log('id: ', id);
    const { data } = await authorizedAxios.patch(`/match/${id}`);
    const { isSuccess, result, message } = data;

    if (!isSuccess) {
        throw new Error(commonErrorMsg(message));
    }

    return result;
}

// 모든 연결 수락
export const approveAllMatch = async () => {
    const { data } = await authorizedAxios.patch(`/match/all`);
    const { isSuccess, result, message } = data;

    if (!isSuccess) {
        throw new Error(commonErrorMsg(message));
    }

    return result;
}

// 연결 거절
export const rejectMatch = async ({ id }) => {
    const { data } = await authorizedAxios.delete(`/match/${id}`);
    const { isSuccess, result, message } = data;

    if (!isSuccess) {
        throw new Error(commonErrorMsg(message));
    }

    return result;
}