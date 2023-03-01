import { AlertModal } from "components/alertModal";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { modalActions, MODAL_TYPES } from "store/ducks/modalSlice";
import { useAppDispatch, useAppSelector } from "store/Hooks";
import { useExitRoomMutation } from "utils/hooks/useChat";
import {
  useDeleteMatchMutation,
  useMatchApproveAllMutation,
  useMatchApproveMutation,
  useMatchRejectMutation,
} from "utils/hooks/useMatch";
import {
  useBlockUserMutation,
  useReportUserMutation,
} from "utils/hooks/useUsers";
import ModalSelector from "./ModalSelector";

export const TotalAlertModal = () => {
  // navigation
  const params = useParams();
  const navigate = useNavigate();

  // redux
  const dispatch = useAppDispatch();
  const modalSelector = useAppSelector((state) => state.modal);
  const { userId, userNickname, chatRoomId, modalType } = modalSelector;

  // mutations
  // match 관련
  const approveMutation = useMatchApproveMutation();
  const rejectMutation = useMatchRejectMutation();
  const approveAllMutation = useMatchApproveAllMutation();

  // users 관련
  const deleteMatchMutation = useDeleteMatchMutation();
  const blockUserMutation = useBlockUserMutation();
  const reportUserMutation = useReportUserMutation();

  // chat 관련
  const chatExitMutation = useExitRoomMutation();

  // 에러가 방금 발생한 에러인가
  const isCurrentError = useRef(false);

  useEffect(() => {
    return () => {
      dispatch(modalActions.resetModal());
    };
  }, [dispatch]);

  // mutation option
  const commonMutationOptions = (backward) => {
    return {
      onSuccess: async () => {
        await dispatch(modalActions.resetModal());
        backward && (await navigate(-1));
      },
      onError: () => {
        isCurrentError.current = true;
      },
    };
  };

  // handler
  const isGoBack = () => {
    let goBack = false;

    if (Object.keys(params).length > 0) {
      goBack = true;
    }

    return goBack;
  };

  const handleClose = () => {
    dispatch(modalActions.resetModal());
    isCurrentError.current = false;
  };

  const handleApprove = () => {
    approveMutation.mutate({ id: userId }, commonMutationOptions(isGoBack()));
  };

  const handleReject = () => {
    rejectMutation.mutate({ id: userId }, commonMutationOptions(isGoBack()));
  };

  const handleDelete = () => {
    deleteMatchMutation.mutate({ id: userId }, commonMutationOptions());
  };

  const handleApproveAll = () => {
    approveAllMutation.mutate({}, commonMutationOptions(true));
  };

  const handleBlock = () => {
    blockUserMutation.mutate({ id: userId }, commonMutationOptions());
  };

  const handleReport = (title, reason) => {
    console.log(`report : ${userId} ${userNickname} ${title} ${reason}`);
    const reportMutationOptions = {
      ...commonMutationOptions,
      onSuccess: () => {
        dispatch(
          modalActions.showModal({
            content: "신고를 완료했습니다.",
            modalType: MODAL_TYPES.ETC,
          }),
        );
      },
    };

    reportUserMutation.mutate(
      {
        id: userId,
        reportDetail: `${title} ${reason}`,
      },
      reportMutationOptions,
    );
  };

  const handleExit = () => {
    chatExitMutation.mutate(chatRoomId, commonMutationOptions(isGoBack()));
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
    approveMutation.error ||
    approveAllMutation.error ||
    rejectMutation.error ||
    deleteMatchMutation.error ||
    reportUserMutation.error ||
    blockUserMutation.error ||
    chatExitMutation.error;

  // CASE: API 오류 Alert
  if (isCurrentError.current && totalError) {
    return (
      <AlertModal
        title={`다음과 같은 오류가 발생해 \n요청을 처리하지 못했습니다.`}
        subTitle={`${totalError}`}
        buttonTitle="확인"
        onClickButton={handleClose}
        onClickClose={handleClose}
      />
    );
  }

  return <ModalSelector type={modalType} handler={handler} />;
};
