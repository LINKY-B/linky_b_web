import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/Hooks";
import { useTheme } from "styled-components";
import { useChatLists, useLikeChatMutation } from "utils/hooks/useChat";
import { modalActions, MODAL_TYPES } from "store/ducks/modalSlice";

import { Spacing } from "components/spacing";
import { ChatListItem } from "containers/ChatListItem";
import { Footer } from "containers/Footer";
import { MainHeader } from "containers/MainHeader";
import { TotalAlertModal } from "containers/Modal/TotalAlertModal";
import { ChatWrapper, StyledChat } from "./Chat.style";
import { useCallback } from "react";
import { memo } from "react";

const Chat = () => {
  const ChatList = () => {
    const { data, isLoading, error } = useChatLists();
    const chatLikeMutation = useLikeChatMutation();
    const theme = useTheme();
    const dispatch = useAppDispatch();

    const handleExit = useCallback((roomId) => {
      dispatch(
        modalActions.showModal({
          chatRoomId: roomId,
          modalType: MODAL_TYPES.EXIT,
        }),
      );
    });

    // useQuery pre return
    if (isLoading) {
      return <span>Loading...</span>;
    }

    if (error) {
      return <span>Error : {error.message}</span>;
    }

    const ChatItem = ({ item }) => {
      const { userChattingRoomId } = item;
      return (
        <>
          <ChatListItem
            chat={item}
            onExit={() => handleExit(userChattingRoomId)}
            onLike={() => chatLikeMutation.mutate(userChattingRoomId)}
          />
          <Spacing margin={theme.spacing.lg} />
        </>
      );
    };

    return (
      data &&
      data.map((item) => {
        const { userChattingRoomId } = item;
        return <ChatItem item={item} key={userChattingRoomId} />;
      })
    );
  };

  const navigate = useNavigate();
  const handleSearch = useCallback(() => navigate("/chat/search"));

  return (
    <>
      <MainHeader onClickSearch={handleSearch} search />
      <TotalAlertModal />
      <StyledChat>
        <ChatWrapper>
          <ChatList />
        </ChatWrapper>
      </StyledChat>
      <Footer />
    </>
  );
};

export default memo(Chat);
