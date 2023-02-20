import { useRef } from "react";
import { modalActions, MODAL_TYPES } from "store/ducks/modalSlice";
import { useAppDispatch, useAppSelector } from "store/Hooks";
import { useExitRoomMutation } from "utils/hooks/useChat";
import {
  useMatchApproveAllMutation,
  useMatchApproveMutation,
  useMatchRejectMutation,
} from "utils/hooks/useMatch";
import { AlertModal } from "components/alertModal";
import ModalSelector from "./ModalSelector";
import { useEffect } from "react";

export const TotalAlertModal = ({ onSuccessMutation, onMutation }) => {
  // redux
  const dispatch = useAppDispatch();
  const modalSelector = useAppSelector((state) => state.modal);
  const { userId, userNickname, chatRoomId, modalType } = modalSelector;

  // mutations
  const approveMutation = useMatchApproveMutation();
  const rejectMutation = useMatchRejectMutation();
  const approveAllMutation = useMatchApproveAllMutation();
  const chatExitMutation = useExitRoomMutation();

  // 에러가 방금 발생한 에러인가
  const isCurrentError = useRef(false);

  useEffect(() => {
    return () => {
      dispatch(modalActions.resetModal());
    };
  }, [dispatch]);

  // mutation option
  const commonMutationOptions = {
    onSuccess: () => {
      dispatch(modalActions.resetModal());
      onSuccessMutation && onSuccessMutation();
    },
    onError: () => {
      isCurrentError.current = true;
    },
  };

  // handler
  const handleClose = () => {
    dispatch(modalActions.setModalType(MODAL_TYPES.NONE));
    isCurrentError.current = false;
  };

  const handleApprove = () => {
    approveMutation.mutate({ id: userId }, commonMutationOptions);
  };

  const handleReject = () => {
    rejectMutation.mutate({ id: userId }, commonMutationOptions);
  };

  const handleDelete = () => {};

  const handleApproveAll = () => {
    approveAllMutation.mutate({}, commonMutationOptions);
  };

  const handleBlock = () => {};

  const handleReport = (title, reason) => {
    console.log(`report : ${userId} ${userNickname} ${title} ${reason}`);
  };

  const handleExit = () => {
    chatExitMutation.mutate(chatRoomId, commonMutationOptions);
  };

  const handler = {
    handleApprove,
    handleApproveAll,
    handleClose,
    handleReject,
    handleDelete,
    handleReport,
    handleBlock,
    handleExit,
  };

  // CASE: NONE
  if (modalType === MODAL_TYPES.NONE) {
    return <></>;
  }

  const totalError =
    approveAllMutation.error || approveMutation.error || rejectMutation.error;

  // CASE: API 오류 Alert
  if (isCurrentError.current && totalError) {
    return (
      <AlertModal
        title={`다음과 같은 오류가 발생해 \n요청을 처리하지 못했습니다. \n (${totalError})`}
        buttonTitle="확인"
        onClickButton={handleClose}
        onClickClose={handleClose}
      />
    );
  }

  return <ModalSelector type={modalType} handler={handler} />;
};
