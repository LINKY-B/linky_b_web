import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useChatDetail } from "utils/hooks/useChat";

import { DotMenuIcon } from "components/Icon/Icon";
import Input from "components/inputs/Input";
import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import MemberInfoContainer from "containers/MemberInfoContainer/MemberInfoContainer";
import { TotalAlertModal } from "containers/Modal/TotalAlertModal";
import { BottomButtonMenu } from "containers/Modals/BottomButtonMenu";
import SubHeader from "containers/SubHeader/SubHeader";
import { useRef } from "react";
import { useTheme } from "styled-components";
import { formatTime } from "utils/time";
import {
  ChatText,
  ColumnWrapper,
  FlexWrapper,
  ProfileImage,
  ReversedFlexWrapper,
  StyledChatDetail,
  StyledChatList,
  StyledDateLine,
} from "./ChatDetail.style";
import { memo } from "react";

const ChatDetail = () => {
  const theme = useTheme();
  const params = useParams();
  const { roomId } = params;
  const { isLoading, data, error } = useChatDetail(roomId);
  const [showMainModal, setShowMainModal] = useState(false);
  const navigate = useNavigate();
  const chatListRef = useRef(null);

  const scorllToBottom = () => {
    const h = chatListRef.current?.scrollHeight;
    chatListRef.current?.scrollTo(0, h);
  };

  useEffect(() => {
    scorllToBottom();
  }, [data]);

  // useQuery pre return
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error : {error.message}</span>;
  }

  const { info, content } = data;

  const {
    userId,
    userNickName,
    userMajorName,
    userStudentNum,
    userProfileImg,
  } = info;

  /* 내가 아닌 다른 사람의 채팅을 보여주기 위한 컴포넌트 */
  const OtherChat = memo(({ sender, msg, createdAt }) => {
    return (
      <FlexWrapper>
        <ColumnWrapper>
          <Text fontSize={theme.fontSize.xxs} color={theme.colors.fontGrey}>
            {sender}
          </Text>
          {msg.map((m, index) => (
            <div key={m + index}>
              <ChatText>
                <Text fontSize={theme.fontSize.sm}>{m}</Text>
              </ChatText>
            </div>
          ))}
        </ColumnWrapper>
        <Spacing />
        <Text fontSize={theme.fontSize.xxs}>{formatTime(createdAt)}</Text>
      </FlexWrapper>
    );
  });

  /* 내 채팅을 보여주기 위한 컴포넌트 */
  const MyChat = memo(({ msg, createdAt }) => {
    return (
      <ReversedFlexWrapper>
        <ColumnWrapper>
          {msg.map((m, index) => (
            <div key={createdAt + m + index}>
              <ChatText inversed>
                <Text
                  fontSize={theme.fontSize.sm}
                  color={theme.colors.mainWhite}
                >
                  {m}
                </Text>
              </ChatText>
              <Spacing />
            </div>
          ))}
        </ColumnWrapper>
        <Spacing />
        <Text fontSize={theme.fontSize.xxs}>{formatTime(createdAt)}</Text>
      </ReversedFlexWrapper>
    );
  });

  const ChatViewer = () => (
    <>
      <SubHeader
        leftChild={
          <MemberInfoContainer
            leftChild={
              <>
                <ProfileImage src={userProfileImg} />
                <Spacing />
              </>
            }
            userNickName={userNickName}
            userDetail={`${userMajorName} / ${userStudentNum}`}
            subheader
          />
        }
        rightChild={
          <button onClick={() => setShowMainModal(true)}>
            <DotMenuIcon />
          </button>
        }
      />
      <StyledChatList ref={chatListRef}>
        {content.map(({ type, value }) => {
          const { id, sender } = value;

          if (type === "date") {
            return (
              <div key={value}>
                <Spacing margin={theme.spacing.xl} />
                <StyledDateLine>
                  <Text fontSize={theme.fontSize.xxs}>{value}</Text>
                </StyledDateLine>
              </div>
            );
          }

          const ChatItem = sender === userNickName ? MyChat : OtherChat;
          return (
            <div key={id}>
              <ChatItem {...value} />
            </div>
          );
        })}
      </StyledChatList>
    </>
  );

  return (
    <StyledChatDetail>
      <TotalAlertModal onSuccessMutation={() => navigate(-1)} />

      {showMainModal && (
        <BottomButtonMenu
          userId={userId}
          userNickName={userNickName}
          onClickClose={() => setShowMainModal(false)}
          roomId={roomId}
        />
      )}
      <ChatViewer />
      <Input />
    </StyledChatDetail>
  );
};

export default ChatDetail;
