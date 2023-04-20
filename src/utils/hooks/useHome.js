import { useMutation, useQuery, useQueryClient } from "react-query"
import { fetchHomeApi, fetchHomeSearch, tryMatch } from "utils/apis/home"

// 홈화면에 쓰이는 key들
export const homeKeys = {
    all: ['home'],
    home: () => [...homeKeys.all, 'home'],
    search: (q) => [...homeKeys.all, 'search', { q }]
}


// Get 홈화면 - 데이터 가져오기
export const useHome = () => {
    return useQuery(homeKeys.home(), () => fetchHomeApi())
}

// Get 홈화면 - 검색 데이터 가져오기
export const useHomeSearch = (q) => {
    return useQuery(homeKeys.search(q), () => fetchHomeSearch(q))
}

// Mutation: 연결 시도
export const useTryMatchMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(tryMatch, {
        onSuccess: (data) => {
            queryClient.invalidateQueries(homeKeys.home());
        },
        onError: (error) => {
            console.log(error);
        }
    })
}