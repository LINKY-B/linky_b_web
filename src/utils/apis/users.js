import { authorizedAxios } from "utils/customAxios";

const commonErrorMsg = (errorMessage) => `${errorMessage}`;

// 좋아요
export const doLikeUser = async ({ id }) => {
    const { data } = await authorizedAxios.post(`/likes/${id}`);
    const { isSuccess, result, message } = data;

    if (!isSuccess) {
        throw new Error(commonErrorMsg(message));
    }

    return result;
}

// 차단
export const doBlockUser = async ({ id }) => {
    const { data } = await authorizedAxios.post(`/users/block/${id}`);
    const { isSuccess, result, message } = data;

    if (!isSuccess) {
        throw new Error(commonErrorMsg(message));
    }

    return result;
}

// 신고
export const doReportUser = async ({ id, reportDetail }) => {
    const requestBody = { reportDetail: reportDetail };
    const { data } = await authorizedAxios.post(`/users/report/${id}`, requestBody);
    const { isSuccess, result, message } = data;

    if (!isSuccess) {
        throw new Error(commonErrorMsg(message));
    }

    return result;
}

