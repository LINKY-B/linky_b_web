import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import PropTypes from "prop-types";
import Draggable from "components/draggable/Draggable";
import { PinIcon } from "components/Icon/Icon";
import { Spacing } from "components/spacing";
import { Text } from "components/text";
import { MemberInfoContainer } from "containers/MemberInfoContainer";
import { elapsedTime } from "utils/time";
import {
  ItemWrapper,
  LeftSideWrapper,
  ProfileImage,
  RightSideWrapper,
  SideButton,
  StyledMemberInfoContainer,
  StyledMemberInfoSection,
} from "./ChatListItem.style";

/**
 *
 * @param {object} chat 채팅 관련 dto object
 * @param {function} onClick 채팅 아이템이 클릭됐을 때의 콜백함수
 * @param {function} onExit 드래그 해서 나가기 했을 때의 콜백함수
 * @param {function} onLike 드래그 해서 PIN을 했을 때의 콜백함수
 * @param {function} draggable 드래그가 되게할지 안되게 할지
 *
 * @returns
 */
const ChatListItem = ({ chat, onClick, onExit, onLike, draggable }) => {
  const {
    userChattingRoomId,
    userProfileImg,
    userNickname,
    userStudentNum,
    userMajorName,
    lastConversationContents,
    lastConversationTime,
    like,
  } = chat;

  const theme = useTheme();
  const navigate = useNavigate();

  const handleLeftFull = () => {
    onLike && onLike();
  };

  const handleRightFull = () => {
    onExit && onExit();
  };

  return (
    <ItemWrapper>
      {draggable && (
        <LeftSideWrapper>
          <SideButton backgroundColor={like && theme.colors.fontGrey}>
            <PinIcon
              color={theme.colors.mainWhite}
              width="0.8em"
              height="0.8em"
            />
          </SideButton>
        </LeftSideWrapper>
      )}
      <Draggable
        onLeftFull={handleLeftFull}
        onRightFull={handleRightFull}
        onClick={() => navigate(`/chat/${userChattingRoomId}`)}
      >
        <StyledMemberInfoSection>
          <StyledMemberInfoContainer>
            <MemberInfoContainer
              leftChild={
                <>
                  <ProfileImage src={userProfileImg} />
                  <Spacing />
                </>
              }
              bottomChild={
                <Text
                  color={theme.colors.fontGrey}
                  fontSize={theme.fontSize.xxs}
                >
                  {lastConversationContents}
                </Text>
              }
              rightChild={
                <Text
                  color={theme.colors.fontGrey}
                  fontSize={theme.fontSize.xxs}
                >
                  {elapsedTime(lastConversationTime)}
                </Text>
              }
              onClick={onClick}
              userNickname={userNickname}
              userDetail={`${userMajorName} / ${userStudentNum}`}
              pin={like}
            />
          </StyledMemberInfoContainer>
        </StyledMemberInfoSection>
      </Draggable>

      {draggable && (
        <RightSideWrapper>
          <SideButton backgroundColor={theme.colors.fontGrey}>
            <Text color={theme.colors.mainWhite} fontSize={theme.fontSize.xs}>
              나가기
            </Text>
          </SideButton>
        </RightSideWrapper>
      )}
    </ItemWrapper>
  );
};

ChatListItem.propTypes = {
  user: PropTypes.object,
  onClick: PropTypes.func,
  onExit: PropTypes.func,
  onLike: PropTypes.func,
  draggable: PropTypes.bool,
};

ChatListItem.defaultProps = {
  draggable: true,
};

export default ChatListItem;
