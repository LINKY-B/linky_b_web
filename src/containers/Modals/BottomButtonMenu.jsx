import MainModal from "components/mainModal/MainModal";
import { matchActions, MATCH_MODAL_TYPES } from "store/ducks/matchSlice";
import { useAppDispatch } from "store/Hooks";
import { useTheme } from "styled-components";
import { Hr, ModalCover } from "styles/Style";
import { ModalButton, ModalButtonWrapper } from "./Modals.style";

export const BottomButtonMenu = ({ onClickClose, userId, userNickname }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const onClickReportButton = () => {
    onClickClose();

    dispatch(
      matchActions.showModal({
        userId,
        userNickname,
        modalType: MATCH_MODAL_TYPES.REPORT,
      }),
    );
  };
  const onClickBlockButton = () => {
    onClickClose();

    dispatch(
      matchActions.showModal({
        userId,
        userNickname,
        modalType: MATCH_MODAL_TYPES.BLOCK,
      }),
    );
  };

  return (
    <MainModal
      buttonTitle="취소"
      buttonColor={theme.colors.fontGreen}
      onClickButton={onClickClose}
      onClickCover={onClickClose}
    >
      <ModalButtonWrapper>
        <ModalButton onClick={onClickReportButton}>신고하기</ModalButton>
        <Hr />
        <ModalButton onClick={onClickBlockButton}>차단하기</ModalButton>
      </ModalButtonWrapper>
    </MainModal>
  );
};
