import { useRef } from "react";
import { matchActions, MATCH_MODAL_TYPES } from "store/ducks/matchSlice";
import { useAppDispatch, useAppSelector } from "store/Hooks";
import {
  useMatchApproveMutation,
  useMatchRejectMutation,
} from "utils/hooks/useMatch";
import { AlertModal } from "./alertModal";

export const MatchModal = ({ onSuccessMutation, onMutation }) => {
  // redux
  const dispatch = useAppDispatch();
  const match = useAppSelector((state) => state.match);
  const { userId, userNickname, modalType } = match;

  // mutations
  const approveMutation = useMatchApproveMutation();
  const rejectMutation = useMatchRejectMutation();

  // 에러가 방금 발생한 에러인가
  const isCurrentError = useRef(false);

  // mutation option
  const commonMutationOptions = {
    onSuccess: () => {
      dispatch(matchActions.resetModal());
      onSuccessMutation && onSuccessMutation();
    },
    onError: () => {
      isCurrentError.current = true;
    },
  };

  // handler
  const handleClose = () => {
    dispatch(matchActions.setMatchModalType(MATCH_MODAL_TYPES.NONE));
    isCurrentError.current = false;
  };

  const handleApprove = () => {
    approveMutation.mutate({ id: userId }, commonMutationOptions);
  };

  const handleReject = () => {
    rejectMutation.mutate({ id: userId }, commonMutationOptions);
  };

  // CASE: NONE
  if (modalType === MATCH_MODAL_TYPES.NONE) {
    return <></>;
  }

  // CASE: API 오류 Alert
  if (
    isCurrentError.current &&
    (approveMutation.isError || rejectMutation.isError)
  ) {
    return (
      <AlertModal
        title={`다음과 같은 오류가 발생해 \n요청을 처리하지 못했습니다. \n (${
          approveMutation.error || rejectMutation.error
        })`}
        buttonTitle="확인"
        onClickButton={handleClose}
        onClickClose={handleClose}
      />
    );
  }

  // CASE: Approve Alert
  if (modalType === MATCH_MODAL_TYPES.APPROVE) {
    return (
      <AlertModal
        title={`${userNickname} 님의 \n 연결요청을 수락하시겠습니까?`}
        buttonTitle="수락하기"
        onClickButton={handleApprove}
        onClickClose={handleClose}
      />
    );
  }

  // CASE: Reject Alert
  if (modalType === MATCH_MODAL_TYPES.REJECT) {
    return (
      <AlertModal
        title={`${userNickname} 님의 \n 연결요청을 거절하시겠습니까?`}
        buttonTitle="거절하기"
        buttonColor="grey"
        onClickButton={handleReject}
        onClickClose={handleClose}
      />
    );
  }
};
