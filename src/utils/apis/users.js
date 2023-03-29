import { authorizedAxios } from "utils/customAxios";

const commonErrorMsg = (errorMessage) => `${errorMessage}`;

// 좋아요
export const doLikeUser = async ({ id }) => {
    const { data } = await authorizedAxios.post(`/likes/${id}`);
    const { errors, message } = data;

    if (errors) {
        throw new Error(commonErrorMsg(message));
    }

    return data.data;
}

// 차단
export const doBlockUser = async ({ id }) => {
    const { data } = await authorizedAxios.post(`/users/block/${id}`);
    const { errors, message } = data;

    if (errors) {
        throw new Error(commonErrorMsg(message));
    }

    return data.data;
}

// 신고
export const doReportUser = async ({ id, reportDetail }) => {
    const requestBody = { reportDetail: reportDetail };
    const { data } = await authorizedAxios.post(`/users/report/${id}`, requestBody);
    const { errors, message } = data;

    if (errors) {
        throw new Error(commonErrorMsg(message));
    }

    return data.data;
}

