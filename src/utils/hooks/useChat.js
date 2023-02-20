import { useQuery, useQueryClient, useMutation } from "react-query"
import { doExitChat, doLikeChat, fetchChatDetail, fetchChatLists } from "utils/apis/chat"

// 연결화면에 쓰이는 key들
const chatKeys = {
    all: ['chat'],
    lists: () => [...chatKeys.all, 'lists'],
    detail: (roomId) => [...chatKeys.all, 'details', roomId]
}

// 채팅화면 정렬
const compareChat = (a, b) => {
    let dateA = new Date(a.lastConversationTime);
    let dateB = new Date(b.lastConversationTime);

    if (a.like && !b.like) {
        return -1;
    }

    if (!a.like && b.like) {
        return 1;
    }

    if (dateA > dateB) {
        return -1;
    }
    return 1;
}

// Get 채팅화면 - 채팅 목록 가져오기
export const useChatLists = () => {
    return useQuery(chatKeys.lists(), () => fetchChatLists());
}


// 채팅화면 - 채팅방 좋아요 pin - optimistic
export const useLikeChatMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(doLikeChat, {
        onMutate: async (roomId) => {
            await queryClient.cancelQueries(chatKeys.lists());
            const previous = queryClient.getQueryData(chatKeys.lists());

            if (previous) {
                queryClient.setQueryData(chatKeys.lists(), (old) => {
                    const others = old.filter(c => c.userChattingRoomId !== roomId);
                    const target = old.filter(c => c.userChattingRoomId === roomId);

                    if (target.length === 0) {
                        return old;
                    }

                    target[0].like = !target[0].like;

                    const ret = [...target, ...others].sort(compareChat);
                    return ret;
                })
            }
        },
        onError: (error) => {
            console.log(error);
        },
        onSettled: () => {
            queryClient.invalidateQueries(chatKeys.lists());
        },
    })
}

// 채팅화면 - 채팅방 나가기
export const useExitRoomMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(doExitChat, {
        onMutate: async (roomId) => {
            await queryClient.cancelQueries(chatKeys.lists());
            const previous = queryClient.getQueryData(chatKeys.lists());

            if (previous) {
                queryClient.setQueryData(chatKeys.lists(), (old) => {
                    const rests = old.filter(c => c.userChattingRoomId !== roomId);
                    return rests;
                })
            }
        },
        onError: (error) => {
            console.log(error);
        },
        onSettled: () => {
            queryClient.invalidateQueries(chatKeys.lists());
        },
    })
}

// Get 채팅화면 - 채팅방 - 채팅대화 목록 가져오기
export const useChatDetail = (roomId) => {
    return useQuery(chatKeys.detail(roomId), () => fetchChatDetail(roomId));
}