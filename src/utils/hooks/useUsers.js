import { useMutation, useQueryClient } from "react-query";
import { doBlockUser, doReportUser } from "utils/apis/users";
import { matchKeys } from "./useMatch";

//좋아요


// 사용자 차단
export const useBlockUserMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(doBlockUser, {
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

// 사용자 신고
export const useReportUserMutation = () => {

    return useMutation(doReportUser, {
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        }
    })
}