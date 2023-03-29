import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { useAppDispatch, useAppSelector } from "store/Hooks";
import { useChatListSearch } from "utils/hooks/useChat";
import { chatActions } from "store/ducks/chatSlice";

import { Header } from "components/header/Header";
import { ChatQuestionMarkIcon, SearchIcon } from "components/Icon/Icon";
import { Spacing } from "components/spacing";
import { Text } from "components/text";
import { ChatListItem } from "containers/ChatListItem";
import { ChatWrapper } from "pages/Chat/Chat.style";
import { debounce } from "utils/util";
import {
  SearchBarContainer,
  SearchContainer,
  SearchInput,
  StyledButton,
  StyledSearch,
} from "./Search.style";

const ChatListSearch = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const searchInputRef = useRef();
  const dispatch = useAppDispatch();
  const chatSelector = useAppSelector((state) => state.chat);
  const { listSearchKeyword } = chatSelector;
  const { data, isLoading, error } = useChatListSearch(listSearchKeyword);
  const { setChatRoomSearchInput } = chatActions;

  useEffect(() => {
    if (searchInputRef?.current) {
      searchInputRef.current.focus();
    }
  }, [searchInputRef]);

  const handleChange = useCallback(
    (e) => {
      debounce(dispatch(setChatRoomSearchInput(e.target.value)), 500);
    },
    [dispatch, setChatRoomSearchInput],
  );

  const handleCancel = () => {
    navigate(-1);
    dispatch(setChatRoomSearchInput(""));
  };

  return (
    <StyledSearch>
      <Header>
        <SearchBarContainer>
          <SearchIcon />
          <SearchInput
            placeholder="검색"
            ref={searchInputRef}
            onChange={handleChange}
            value={listSearchKeyword}
          />
        </SearchBarContainer>
        <StyledButton onClick={handleCancel}>
          <Text fontSize={theme.fontSize.sm}>취소</Text>
        </StyledButton>
      </Header>
      {isLoading || error || !data ? (
        <SearchContainer>
          <ChatQuestionMarkIcon />
          <Spacing margin={theme.spacing.lg} />
          <Text color={theme.colors.fontGrey} fontSize={theme.fontSize.sm}>
            닉네임을 검색해 채팅방을 찾아보세요
          </Text>
        </SearchContainer>
      ) : (
        <ChatWrapper>
          {data &&
            data.map((item) => {
              const { userChattingRoomId } = item;
              return (
                <div key={userChattingRoomId}>
                  <ChatListItem chat={item} draggable={false} />
                  <Spacing margin={theme.spacing.lg} />
                </div>
              );
            })}
        </ChatWrapper>
      )}
    </StyledSearch>
  );
};

ChatListSearch.defaultProps = {
  onClickCancel: () => {},
};

export default ChatListSearch;
