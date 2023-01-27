import { useMutation, useQuery, useQueryClient } from "react-query"
import { fetchMatchHomeApi, fetchMatchDetail, approveMatch, rejectMatch } from "utils/apis/match"

// 연결화면에 쓰이는 key들
const matchKeys = {
    all: ['match'],
    home: () => [...matchKeys.all, 'home'],
    matched: () => [...matchKeys.all, 'matched'],
    matching: () => [...matchKeys.all, 'matching'],
    detail: (id) => [...matchKeys.all, 'detail', id]
}

// Mutation 유형: 모두 수락 / 수락 / 거절
export const mutationTypes = {
    APPROVE_ALL: 'APPROVE_ALL',
    APPROVE: 'APPROVE',
    REJECT: 'REJECT'
}

// Mutation: 수락
export const useMatchApproveMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(approveMatch, {
        onSuccess: (data) => {
            queryClient.invalidateQueries(matchKeys.home());
            queryClient.invalidateQueries(matchKeys.matched());
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        }
    })
}

// Mutatation: 거절
export const useMatchRejectMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(rejectMatch, {
        onSuccess: (data) => {
            queryClient.invalidateQueries(matchKeys.home());
            queryClient.invalidateQueries(matchKeys.matched());
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        }
    })
}

// Get 연결화면 - 홈 데이터 가져오기
export const useMatchHome = () => {
    return useQuery(matchKeys.home(), () => fetchMatchHomeApi())
}

// Get 연결화면 - 나에게 연결을 시도한 회원의 상세정보 가져오기
export const useMatchDetail = (id) => {
    return useQuery(matchKeys.detail(id), () => fetchMatchDetail(id))
}