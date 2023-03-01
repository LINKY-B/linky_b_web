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

const Chat = () => {
  const { data, isLoading, error } = useChatLists();
  const chatLikeMutation = useLikeChatMutation();
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const handleExit = (roomId) => {
    dispatch(
      modalActions.showModal({
        chatRoomId: roomId,
        modalType: MODAL_TYPES.EXIT,
      }),
    );
  };

  // useQuery pre return
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error : {error.message}</span>;
  }

  return (
    <>
      <MainHeader onClickSearch={() => navigate("/chat/search")} search />
      <TotalAlertModal />
      <StyledChat>
        <ChatWrapper>
          {data &&
            data.map((item) => {
              const { userChattingRoomId } = item;
              return (
                <div key={userChattingRoomId}>
                  <ChatListItem
                    chat={item}
                    onExit={() => handleExit(userChattingRoomId)}
                    onLike={() => chatLikeMutation.mutate(userChattingRoomId)}
                  />
                  <Spacing margin={theme.spacing.lg} />
                </div>
              );
            })}
        </ChatWrapper>
      </StyledChat>
      <Footer />
    </>
  );
};

export default Chat;
