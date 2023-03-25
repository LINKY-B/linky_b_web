import MainModal from "components/mainModal/MainModal";
import PropTypes from "prop-types";
import { modalActions, MODAL_TYPES } from "store/ducks/modalSlice";
import { useAppDispatch } from "store/Hooks";
import { useTheme } from "styled-components";
import { Hr } from "styles/Style";
import { ModalButton, ModalButtonWrapper } from "./Modals.style";

/**
 *
 * @param {function} onClickClose 닫혀야할 때의 콜백
 * @param {string} userId 사용자 아이디
 * @param {string} userNickName 사용자 닉네임
 * @param {roomId} 채팅화면에서 쓰이는 메뉴인 경우 roomId가 필요하다.
 *
 * @returns
 */
export const BottomButtonMenu = ({
  onClickClose,
  userId,
  userNickName,
  roomId,
}) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const onClickReportButton = () => {
    onClickClose();

    dispatch(
      modalActions.showModal({
        userId,
        userNickName,
        modalType: MODAL_TYPES.REPORT,
      }),
    );
  };
  const onClickBlockButton = () => {
    onClickClose();

    dispatch(
      modalActions.showModal({
        userId,
        userNickName,
        modalType: MODAL_TYPES.BLOCK,
      }),
    );
  };
  const onClickExit = () => {
    onClickClose();

    dispatch(
      modalActions.showModal({
        chatRoomId: roomId,
        modalType: MODAL_TYPES.EXIT,
      }),
    );
  };

  const otherButtons = [{ title: "방에서 나가기", handler: onClickExit }];

  const defaultButtons = [
    {
      title: "신고하기",
      handler: onClickReportButton,
    },
    {
      title: "차단하기",
      handler: onClickBlockButton,
    },
  ];

  const buttons = roomId
    ? [...defaultButtons, ...otherButtons]
    : defaultButtons;

  return (
    <MainModal
      buttonTitle="취소"
      buttonColor={theme.colors.fontGreen}
      onClickButton={onClickClose}
      onClickCover={onClickClose}
    >
      <ModalButtonWrapper>
        {buttons.map(({ title, handler }, id) => {
          return (
            <div key={title}>
              <ModalButton onClick={handler}>{title}</ModalButton>
              {id !== buttons.length - 1 && <Hr />}
            </div>
          );
        })}
      </ModalButtonWrapper>
    </MainModal>
  );
};

BottomButtonMenu.propTypes = {
  extendButtons: PropTypes.array,
};

BottomButtonMenu.defaultProps = {
  extendButtons: [],
};
