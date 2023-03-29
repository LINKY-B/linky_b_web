import { memo } from "react";
import { MODAL_TYPES } from "store/ducks/modalSlice";
import { useAppSelector } from "store/Hooks";
import AlertModal from "components/alertModal/AlertModal";
import ReportModal from "containers/Modals/ReportModal";

const ModalSelector = ({ type, handler }) => {
  const {
    handleApprove,
    handleApproveAll,
    handleClose,
    handleReject,
    handleDelete,
    handleReport,
    handleBlock,
    handleExit,
  } = handler;

  // redux
  const modalState = useAppSelector((state) => state.modal);
  const { userNickName, content } = modalState;

  const modals = {
    [MODAL_TYPES.NONE]: <></>,
    [MODAL_TYPES.APPROVE]: (
      <AlertModal
        title={`${userNickName} 님의 \n 연결요청을 수락하시겠습니까?`}
        buttonTitle="수락하기"
        onClickButton={handleApprove}
        onClickClose={handleClose}
      />
    ),
    [MODAL_TYPES.APPROVE_ALL]: (
      <AlertModal
        title={`모든 연결을 수락하시겠습니까?`}
        buttonTitle="모두 수락하기"
        onClickButton={handleApproveAll}
        onClickClose={handleClose}
      />
    ),
    [MODAL_TYPES.REJECT]: (
      <AlertModal
        title={`${userNickName} 님의 \n 연결요청을 거절하시겠습니까?`}
        buttonTitle="거절하기"
        buttonColor="grey"
        onClickButton={handleReject}
        onClickClose={handleClose}
      />
    ),
    [MODAL_TYPES.DELETE]: (
      <AlertModal
        title={`연결 시도 내역을 삭제하겠습니까?`}
        buttonTitle="삭제하기"
        buttonColor="grey"
        onClickButton={handleDelete}
        onClickClose={handleClose}
      />
    ),
    [MODAL_TYPES.BLOCK]: (
      <AlertModal
        title={`${userNickName} 님을 \n 차단하시겠습니까?`}
        subTitle={`*삭제한 회원은 설정의 차단 관리에서 \n 관리할 수 있습니다`}
        buttonTitle="차단하기"
        buttonColor="grey"
        onClickButton={handleBlock}
        onClickClose={handleClose}
      />
    ),
    [MODAL_TYPES.REPORT]: (
      <ReportModal
        userNickName={userNickName}
        onClickClose={handleClose}
        onClickReport={handleReport}
      />
    ),
    [MODAL_TYPES.EXIT]: (
      <AlertModal
        title={`방에서 나가시겠습니까?`}
        subTitle={`*대화 내용이 모두 삭제되고\n 더이상 상대방과 대화할 수 없습니다. `}
        buttonTitle="방에서 나가기"
        buttonColor="grey"
        onClickButton={handleExit}
        onClickClose={handleClose}
      />
    ),
    [MODAL_TYPES.ETC]: (
      <AlertModal
        title={`${content}`}
        buttonTitle="확인"
        onClickButton={handleClose}
        onClickClose={handleClose}
      />
    ),
  };

  return modals[type];
};

export default memo(ModalSelector);
