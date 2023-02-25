import { useMutation, useQuery, useQueryClient } from "react-query"
import { fetchMatchHomeApi, fetchMatchDetail, approveMatch, rejectMatch, fetchTryMatchingListApi, fetchTryMatchedListApi, approveAllMatch, deleteMatch } from "utils/apis/match"

// 연결화면에 쓰이는 key들
export const matchKeys = {
    all: ['match'],
    home: () => [...matchKeys.all, 'home'],
    lists: () => [...matchKeys.all, 'list'],
    matched: () => [...matchKeys.lists(), 'matched'],
    matching: () => [...matchKeys.lists(), 'matching'],
    detail: (id) => [...matchKeys.all, 'detail', id]
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

// Mutation: 모든 연결 수락
export const useMatchApproveAllMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(approveAllMatch, {
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

// Mutation: 내가 매칭 시도한 내역 삭제
export const useDeleteMatchMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(deleteMatch, {
        onSuccess: (data) => {
            queryClient.invalidateQueries(matchKeys.home());
            queryClient.invalidateQueries(matchKeys.matching());
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

// Get 연결화면 - 내가 연결을 시도한 회원 데이터 가져오기
export const useMatchingList = () => {
    return useQuery(matchKeys.matching(), () => fetchTryMatchingListApi())
}

// Get 연결화면 - 나에게 연결을 시도한 회원 데이터 가져오기
export const useMatchedList = (type) => {
    return useQuery(matchKeys.matched(), () => fetchTryMatchedListApi())
}

// Get 연결화면 - 나에게 연결을 시도한 회원의 상세정보 가져오기
export const useMatchDetail = (id) => {
    return useQuery(matchKeys.detail(id), () => fetchMatchDetail(id))
}