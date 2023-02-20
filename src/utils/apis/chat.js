import { authorizedAxios } from "utils/customAxios";
import { formatDateTime, formatDate } from "utils/time";

const commonErrorMsg = (errorMessage) => `${errorMessage}`;

// 채팅화면 홈
export const fetchChatLists = async () => {
    const { data } = await authorizedAxios.get('/chat/lists');
    return data.data;
}

// 채팅화면 - 채팅방 좋아요
export const doLikeChat = async (roomId) => {
    const { data } = await authorizedAxios.post(`/chat/like/${roomId}`);
    const { isSuccess, result, message } = data;

    if (!isSuccess) {
        throw new Error(commonErrorMsg(message));
    }

    return result;
}

// 채팅화면 - 채팅방 나가기
export const doExitChat = async (roomId) => {
    const { data } = await authorizedAxios.put(`/chat/exit/${roomId}`);
    const { isSuccess, result, message } = data;

    if (!isSuccess) {
        throw new Error(commonErrorMsg(message));
    }

    return result;
}

// 채팅화면 - 채팅 Details - 목록 가져오기
export const fetchChatDetail = async (roomId) => {
    const { data } = await authorizedAxios.get(`/chat/${roomId}`);
    const { isSuccess, result, message } = data;

    if (!isSuccess) {
        throw new Error(commonErrorMsg(message));
    }

    // 채팅 데이터 렌더링을 위한 전처리.
    // 같은 사람 + 같은 시각에 한 것은 하나로 처리하고, 
    // 날짜가 다른 날은 type을 date로 하여 날짜 구분선이 표시될 수 있도록 함.
    const { info, content } = result;
    let lastChatDate = "";
    const renderTarget = [];

    for (let i = 0; i < content.length; i++) {
        const cur = content[i];
        const { createdAt, sender, msg } = cur;

        const longDate = formatDateTime(createdAt);
        const shortDate = formatDate(createdAt);

        let sameTimeMsgs = [msg];

        if (lastChatDate !== shortDate) {
            lastChatDate = shortDate;
            renderTarget.push({
                "type": 'date',
                "value": shortDate
            })

            i--;
            continue;
        }

        let nextIndex = i + 1;
        for (; nextIndex < content.length;) {
            const next = content[nextIndex];
            const nextLongDate = formatDateTime(next.createdAt);
            const nextSender = next.sender;

            if (sender !== nextSender) {
                break;
            }

            if (longDate !== nextLongDate) {
                break;
            }

            sameTimeMsgs = [...sameTimeMsgs, next.msg];
            ++nextIndex;
        }

        cur.msg = sameTimeMsgs;
        renderTarget.push({
            "type": 'chat',
            "value": cur
        })

        i = nextIndex - 1;
    }

    return { info: info, content: renderTarget };
}
